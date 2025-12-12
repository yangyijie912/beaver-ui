import React from 'react';
import './Toast.css';
import { createRoot, Root } from 'react-dom/client';
import { createPortal } from 'react-dom';

/**
 * Toast 通知类型
 */
export type ToastType = 'success' | 'warning' | 'error' | 'info' | 'loading';

/**
 * Toast 通知实例的配置选项
 */
export interface ToastOptions {
  /** 通知类型 */
  type?: ToastType;
  /** 通知标题 */
  title?: React.ReactNode;
  /** 通知描述内容 */
  message?: React.ReactNode;
  /** 自动关闭的时间（毫秒），0 表示不自动关闭 */
  duration?: number;
  /** 关闭时的回调 */
  onClose?: () => void;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 是否可以手动关闭 */
  closable?: boolean;
}

/**
 * Toast 消息队列项
 */
interface ToastItem extends ToastOptions {
  /** 唯一标识符 */
  id: string;
}

/**
 * Toast 通知组件
 *
 * 用于在页面顶部显示全局通知消息
 * 使用方式：通过 Toast.success()、Toast.warning() 等静态方法调用
 */
const ToastContainer = React.forwardRef<
  HTMLDivElement,
  { items: ToastItem[]; onRemove: (id: string) => void; host?: Element | null; disablePortal?: boolean }
>((props, ref) => {
  const { items, onRemove, host, disablePortal } = props;
  if (typeof document === 'undefined') {
    return null as any;
  }

  const container = (
    <div
      ref={ref}
      className={`beaver-toast-container${disablePortal ? ' beaver-toast-container--inline' : ''}`}
      {...(disablePortal ? { 'data-inline': 'true' } : {})}
    >
      {items.map((item) => (
        <ToastItem key={item.id} item={item} onRemove={() => onRemove(item.id)} />
      ))}
    </div>
  );

  // 如果显式要求不使用 portal（在 Provider 范围内直接渲染），直接返回 container
  if (disablePortal) return container;

  return createPortal(container, host ?? document.body);
});

ToastContainer.displayName = 'ToastContainer';

/**
 * 单条 Toast 通知项组件
 */
const ToastItem: React.FC<{
  item: ToastItem;
  onRemove: () => void;
}> = ({ item, onRemove }) => {
  const { type = 'info', title, message, duration = 3000, onClose, icon, closable = true } = item;

  // 在组件挂载时设置自动关闭计时器
  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    onRemove();
    onClose?.();
  };

  // 构建类名
  const classList = ['beaver-toast'];
  if (type) classList.push(`beaver-toast--${type}`);

  // 默认图标映射
  const defaultIconMap: Record<ToastType, string> = {
    success: '✓',
    warning: '⚠',
    error: '✕',
    info: 'ℹ',
    loading: '⟳',
  };

  const finalIcon = icon !== undefined ? icon : defaultIconMap[type];

  return (
    <div className={classList.join(' ')} role="alert">
      {/* 图标 */}
      <div className={`beaver-toast__icon beaver-toast__icon--${type}`}>
        {type === 'loading' ? <span className="beaver-toast__spinner">{finalIcon}</span> : finalIcon}
      </div>

      {/* 内容 */}
      <div className="beaver-toast__content">
        {title && <div className="beaver-toast__title">{title}</div>}
        {message && <div className="beaver-toast__message">{message}</div>}
      </div>

      {/* 关闭按钮 */}
      {closable && (
        <button type="button" className="beaver-toast__close" aria-label="关闭通知" onClick={handleClose}>
          ×
        </button>
      )}
    </div>
  );
};

/**
 * 全局 Toast 管理器
 * 维护通知消息队列，提供全局通知 API
 */
class ToastManager {
  private items: ToastItem[] = [];
  private listeners: Set<(items: ToastItem[]) => void> = new Set();
  private idCounter = 0;

  /** 是否有显式的 ToastProvider 注册 */
  private providerCount = 0;
  private providerListeners: Set<(hasProvider: boolean) => void> = new Set();
  /** generation 用于隔离不同宿主/场景的消息，切换 provider 时递增 */
  private generation = 0;

  /**
   * 订阅消息队列变化
   */
  subscribe(listener: (items: ToastItem[]) => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  subscribeProviderChange(listener: (hasProvider: boolean) => void) {
    this.providerListeners.add(listener);
    return () => this.providerListeners.delete(listener);
  }

  registerProvider() {
    this.providerCount += 1;
    // 先同步通知 providerListeners，让默认宿主有机会先取消它的订阅（避免 race）
    this.providerListeners.forEach((l) => l(this.providerCount > 0));
    // 切换到新的 generation，隔离此前的消息（避免跨 story/页面残留）
    this.generation += 1;
    this.items = [];
    this.notify();
  }

  unregisterProvider() {
    this.providerCount = Math.max(0, this.providerCount - 1);
    this.providerListeners.forEach((l) => l(this.providerCount > 0));
    // 如果所有 provider 都已卸载，提升 generation 并清空历史消息，避免卸载后旧消息被默认宿主继续渲染
    if (this.providerCount === 0) {
      this.generation += 1;
      this.items = [];
      this.notify();
    }
  }

  hasProvider() {
    return this.providerCount > 0;
  }

  /**
   * 通知所有监听器
   */
  private notify() {
    // 只把当前 generation 的消息分发给监听器，保证不同宿主/场景互不干扰
    const current = this.generation;
    const visible = this.items.filter((i: any) => (i as any).generation === current);
    this.listeners.forEach((listener) => listener([...visible]));
  }

  /**
   * 生成唯一 ID
   */
  private generateId() {
    return `toast-${++this.idCounter}-${Date.now()}`;
  }

  /** 获取当前所有消息的快照（只读） */
  getItems() {
    return [...this.items];
  }

  /** 获取当前 generation（用于外部渲染过滤） */
  getGeneration() {
    return this.generation;
  }

  /**
   * 添加通知到队列
   */
  private add(options: ToastOptions): string {
    // 在添加第一个通知前确保有渲染容器（若没有显式 Provider）
    tryEnsureDefaultHost();

    const id = this.generateId();
    const item: ToastItem & { generation?: number } = {
      ...options,
      id,
      generation: this.generation,
    } as any;
    this.items.push(item);
    this.notify();
    return id;
  }

  /**
   * 从队列中移除通知
   */
  remove(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
    this.notify();
  }

  /**
   * 清空所有通知
   */
  clear() {
    this.items = [];
    this.notify();
  }

  /**
   * 显示成功通知
   */
  success(message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>) {
    return this.add({ ...options, type: 'success', message });
  }

  /**
   * 显示警告通知
   */
  warning(message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>) {
    return this.add({ ...options, type: 'warning', message });
  }

  /**
   * 显示错误通知
   */
  error(message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>) {
    return this.add({ ...options, type: 'error', message });
  }

  /**
   * 显示信息通知
   */
  info(message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>) {
    return this.add({ ...options, type: 'info', message });
  }

  /**
   * 显示加载通知
   */
  loading(message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>) {
    return this.add({ ...options, type: 'loading', message, duration: 0 });
  }

  /**
   * 显示自定义类型的通知
   */
  show(options: ToastOptions) {
    return this.add(options);
  }
}

/**
 * 全局 Toast 管理器实例
 */
const toastManager = new ToastManager();

// 默认宿主的 root 与容器引用（懒创建，仅在浏览器端）
let _defaultRoot: Root | null = null;
let _defaultContainer: HTMLElement | null = null;

function tryEnsureDefaultHost() {
  if (typeof window === 'undefined') return;
  // 如果显式 Provider 存在，则不创建默认宿主
  if (toastManager.hasProvider()) return;
  if (_defaultRoot) return;

  const existing = document.getElementById('beaver-toast-root');
  const container = existing ?? document.createElement('div');
  if (!existing) {
    container.id = 'beaver-toast-root';
    document.body.appendChild(container);
  }

  _defaultContainer = container;
  _defaultRoot = createRoot(container);

  // 立即订阅 manager 更新，并用 root.render 同步渲染 ToastContainer
  const render = (items: ToastItem[]) => {
    _defaultRoot!.render(<ToastContainer items={items} onRemove={(id) => toastManager.remove(id)} />);
  };

  // 先渲染当前状态（可能为空）——仅渲染当前 generation 的消息，避免显示其它场景遗留的通知
  try {
    const gen = (toastManager as any).getGeneration();
    const initial = toastManager.getItems().filter((i: any) => (i as any).generation === gen);
    render(initial);
  } catch {
    render([]);
  }

  // 添加订阅以便后续更新能够立即触发 root.render
  const unsub = toastManager.subscribe((items) => render(items));

  // 当有显式 Provider 注册时，取消订阅并清理默认宿主
  const unsubProvider = toastManager.subscribeProviderChange((has) => {
    if (has) {
      unsub();
      unsubProvider();
      // 使用微任务延迟清理以避免与 Provider 的同步挂载冲突
      Promise.resolve().then(() => cleanupDefaultHost());
    }
  });
}

function cleanupDefaultHost() {
  if (_defaultRoot) {
    try {
      _defaultRoot.unmount();
    } catch {
      // ignore
    }
    _defaultRoot = null;
  }
  if (_defaultContainer && _defaultContainer.parentElement) {
    _defaultContainer.parentElement.removeChild(_defaultContainer);
    _defaultContainer = null;
  }
}

/**
 * Toast 提供器组件
 *
 * 需要在应用的根部包裹此组件，以便全局调用 Toast
 */
export const ToastProvider: React.FC<{ children: React.ReactNode; limitToProvider?: boolean }> = ({
  children,
  limitToProvider = false,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const hostRef = React.useRef<HTMLDivElement>(null);
  const [items, setItems] = React.useState<ToastItem[]>([]);

  React.useLayoutEffect(() => {
    // 使用 useLayoutEffect 在渲染提交后，绘制前注册 Provider，避免与默认宿主懒创建竞态
    toastManager.registerProvider();
    // 清理可能残留的全局通知，保证 Provider 挂载后是干净的状态
    toastManager.clear();
    const unsubscribe = toastManager.subscribe(setItems);
    return () => {
      unsubscribe();
      toastManager.unregisterProvider();
    };
  }, []);

  // 当限定在 provider 范围时，我们将把 ToastContainer 直接渲染在宿主元素内部（disable portal），
  // 因此不需要在这里等待额外的 hostRef 状态更新。

  const handleRemove = (id: string) => {
    toastManager.remove(id);
  };

  return (
    <>
      {children}
      {limitToProvider ? (
        <div ref={hostRef} className="beaver-toast-provider-host">
          <ToastContainer ref={containerRef} disablePortal items={items} onRemove={handleRemove} />
        </div>
      ) : (
        <ToastContainer ref={containerRef} items={items} onRemove={handleRemove} />
      )}
    </>
  );
};

/**
 * 全局 Toast 通知 API
 *
 * 使用示例：
 * ```tsx
 * Toast.success('保存成功')
 * Toast.error('操作失败', { title: '错误提示' })
 * Toast.loading('加载中...', { duration: 0 })
 * ```
 */
const Toast = {
  /** 显示成功通知 */
  success: (message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>) =>
    toastManager.success(message, options),

  /** 显示警告通知 */
  warning: (message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>) =>
    toastManager.warning(message, options),

  /** 显示错误通知 */
  error: (message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>) =>
    toastManager.error(message, options),

  /** 显示信息通知 */
  info: (message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>) =>
    toastManager.info(message, options),

  /** 显示加载通知 */
  loading: (message: React.ReactNode, options?: Omit<ToastOptions, 'type' | 'message'>) =>
    toastManager.loading(message, options),

  /** 显示自定义通知 */
  show: (options: ToastOptions) => toastManager.show(options),

  /** 关闭指定通知 */
  close: (id: string) => toastManager.remove(id),

  /** 清空所有通知 */
  clear: () => toastManager.clear(),
};

export default Toast;
