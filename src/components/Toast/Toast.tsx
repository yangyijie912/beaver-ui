import React from 'react';
import './Toast.css';

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
const ToastContainer = React.forwardRef<HTMLDivElement, { items: ToastItem[]; onRemove: (id: string) => void }>(
  (props, ref) => {
    const { items, onRemove } = props;
    return (
      <div ref={ref} className="beaver-toast-container">
        {items.map((item) => (
          <ToastItem key={item.id} item={item} onRemove={() => onRemove(item.id)} />
        ))}
      </div>
    );
  }
);

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

  /**
   * 订阅消息队列变化
   */
  subscribe(listener: (items: ToastItem[]) => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  /**
   * 通知所有监听器
   */
  private notify() {
    this.listeners.forEach((listener) => listener([...this.items]));
  }

  /**
   * 生成唯一 ID
   */
  private generateId() {
    return `toast-${++this.idCounter}-${Date.now()}`;
  }

  /**
   * 添加通知到队列
   */
  private add(options: ToastOptions): string {
    const id = this.generateId();
    const item: ToastItem = {
      ...options,
      id,
    };
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

/**
 * Toast 提供器组件
 *
 * 需要在应用的根部包裹此组件，以便全局调用 Toast
 */
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [items, setItems] = React.useState<ToastItem[]>([]);

  React.useEffect(() => {
    const unsubscribe = toastManager.subscribe(setItems);
    return unsubscribe;
  }, []);

  const handleRemove = (id: string) => {
    toastManager.remove(id);
  };

  return (
    <>
      {children}
      <ToastContainer ref={containerRef} items={items} onRemove={handleRemove} />
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
