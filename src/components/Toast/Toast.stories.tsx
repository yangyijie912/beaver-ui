import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button/Button';
import Toast, { ToastProvider } from './Toast';
import type { ToastOptions, ToastType } from './Toast';

type BaseToastArgs = {
  type: ToastType;
  title: string;
  message: string;
  duration: number;
  closable: boolean;
  icon: string;
};

type PairToastArgs = BaseToastArgs & {
  secondaryTitle: string;
  secondaryMessage: string;
  secondaryDuration: number;
};

type LoadingToastArgs = BaseToastArgs & {
  loadingMessage: string;
  loadingSuccessMessage: string;
  loadingDelay: number;
};

type MultiToastArgs = BaseToastArgs & {
  firstMessage: string;
  secondMessage: string;
  thirdMessage: string;
  repeatDelay: number;
  repeatCount: number;
  loadingDelay: number;
};

type DurationToastArgs = BaseToastArgs & {
  shortMessage: string;
  shortDuration: number;
  longMessage: string;
  longDuration: number;
  manualMessage: string;
};

type IconToastArgs = BaseToastArgs & {
  emojiIcon: string;
  textIcon: string;
  infoMessage: string;
  textMessage: string;
};

type CallbackToastArgs = BaseToastArgs & {
  callbackLabel: string;
};

type LongContentToastArgs = BaseToastArgs & {
  longMessage: string;
};

type ProviderToastArgs = BaseToastArgs & {
  insideMessage: string;
  outsideMessage: string;
};

const toastTypeOptions: ToastType[] = ['success', 'warning', 'error', 'info', 'loading'];

const baseArgTypes = {
  type: {
    control: { type: 'radio' },
    options: toastTypeOptions,
  },
  title: {
    control: { type: 'text' },
  },
  message: {
    control: { type: 'text' },
  },
  duration: {
    control: { type: 'number', min: 0, step: 500 },
  },
  closable: {
    control: { type: 'boolean' },
  },
  icon: {
    control: { type: 'text' },
  },
} as const;

const pairArgTypes = {
  ...baseArgTypes,
  secondaryTitle: {
    control: { type: 'text' },
  },
  secondaryMessage: {
    control: { type: 'text' },
  },
  secondaryDuration: {
    control: { type: 'number', min: 0, step: 500 },
  },
} as const;

const loadingArgTypes = {
  ...baseArgTypes,
  loadingMessage: {
    control: { type: 'text' },
  },
  loadingSuccessMessage: {
    control: { type: 'text' },
  },
  loadingDelay: {
    control: { type: 'number', min: 0, step: 500 },
  },
} as const;

const multiArgTypes = {
  ...baseArgTypes,
  firstMessage: {
    control: { type: 'text' },
  },
  secondMessage: {
    control: { type: 'text' },
  },
  thirdMessage: {
    control: { type: 'text' },
  },
  repeatDelay: {
    control: { type: 'number', min: 0, step: 100 },
  },
  repeatCount: {
    control: { type: 'number', min: 1, step: 1 },
  },
  loadingDelay: {
    control: { type: 'number', min: 0, step: 500 },
  },
} as const;

const durationArgTypes = {
  ...baseArgTypes,
  shortMessage: {
    control: { type: 'text' },
  },
  shortDuration: {
    control: { type: 'number', min: 0, step: 500 },
  },
  longMessage: {
    control: { type: 'text' },
  },
  longDuration: {
    control: { type: 'number', min: 0, step: 500 },
  },
  manualMessage: {
    control: { type: 'text' },
  },
} as const;

const iconArgTypes = {
  ...baseArgTypes,
  emojiIcon: {
    control: { type: 'text' },
  },
  textIcon: {
    control: { type: 'text' },
  },
  infoMessage: {
    control: { type: 'text' },
  },
  textMessage: {
    control: { type: 'text' },
  },
} as const;

const callbackArgTypes = {
  ...baseArgTypes,
  callbackLabel: {
    control: { type: 'text' },
  },
} as const;

const longContentArgTypes = {
  ...baseArgTypes,
  longMessage: {
    control: { type: 'text' },
  },
} as const;

const providerArgTypes = {
  ...baseArgTypes,
  insideMessage: {
    control: { type: 'text' },
  },
  outsideMessage: {
    control: { type: 'text' },
  },
} as const;

const toOptionalText = (value: string) => value.trim() || undefined;

const buildToastOptions = (
  args: BaseToastArgs,
  overrides: Partial<BaseToastArgs> = {},
): ToastOptions => {
  const merged = { ...args, ...overrides };

  return {
    title: toOptionalText(merged.title),
    message: merged.message,
    duration: merged.duration,
    closable: merged.closable,
    icon: toOptionalText(merged.icon),
  };
};

const showFreshToast = (type: ToastType, options: ToastOptions) => {
  Toast.clear();
  return Toast.show({ type, ...options });
};

/**
 * Toast 全局通知组件
 *
 * - 使用场景：全局通知和提示，显示操作结果反馈（成功、失败、警告等）
 * - 支持 Toast.success()、Toast.error() 等方法调用
 * - 支持自动关闭（可配置时长）或手动关闭
 * - 支持标题和描述两层信息
 * - 支持自定义图标
 * - 支持回调函数（如关闭时触发）
 * - 可通过 ToastProvider 配置全局选项
 */
const meta: Meta = {
  title: '反馈（Feedback）/Toast',
  tags: ['autodocs'],
};

export default meta;

/**
 * 成功通知
 */
export const Success: StoryObj<PairToastArgs> = {
  name: '成功通知',
  args: {
    type: 'success',
    title: '保存成功',
    message: '个人资料已更新',
    duration: 3000,
    closable: true,
    icon: '',
    secondaryTitle: '保存成功',
    secondaryMessage: '个人资料已更新',
    secondaryDuration: 5000,
  },
  argTypes: pairArgTypes,
  render: (args: PairToastArgs) => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button
          variant="primary"
          onClick={() => {
            showFreshToast(
              args.type,
              buildToastOptions(args, { title: '', message: args.message }),
            );
          }}
        >
          显示成功提示
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            showFreshToast(
              args.type,
              buildToastOptions(args, {
                title: args.secondaryTitle,
                message: args.secondaryMessage,
                duration: args.secondaryDuration,
              }),
            );
          }}
        >
          带标题的成功提示
        </Button>
      </div>
    </ToastProvider>
  ),
};

/**
 * 错误通知
 */
export const Error: StoryObj<PairToastArgs> = {
  name: '错误通知',
  args: {
    type: 'error',
    title: '操作失败',
    message: '网络连接失败，请检查网络设置',
    duration: 5000,
    closable: true,
    icon: '',
    secondaryTitle: '操作失败',
    secondaryMessage: '网络连接失败，请检查网络设置',
    secondaryDuration: 5000,
  },
  argTypes: pairArgTypes,
  render: (args: PairToastArgs) => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button
          color="danger"
          onClick={() => {
            showFreshToast(
              args.type,
              buildToastOptions(args, { title: '', message: args.message }),
            );
          }}
        >
          显示错误提示
        </Button>
        <Button
          color="danger"
          onClick={() => {
            showFreshToast(
              args.type,
              buildToastOptions(args, {
                title: args.secondaryTitle,
                message: args.secondaryMessage,
                duration: args.secondaryDuration,
              }),
            );
          }}
        >
          长时间显示的错误提示
        </Button>
      </div>
    </ToastProvider>
  ),
};

/**
 * 警告通知
 */
export const Warning: StoryObj<PairToastArgs> = {
  name: '警告通知',
  args: {
    type: 'warning',
    title: '提醒',
    message: '此操作不可撤销',
    duration: 3000,
    closable: true,
    icon: '',
    secondaryTitle: '提醒',
    secondaryMessage: '你有2条未读消息需要处理',
    secondaryDuration: 3000,
  },
  argTypes: pairArgTypes,
  render: (args: PairToastArgs) => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button
          onClick={() => {
            showFreshToast(
              args.type,
              buildToastOptions(args, { title: '', message: args.message }),
            );
          }}
        >
          显示警告提示
        </Button>
        <Button
          onClick={() => {
            showFreshToast(
              args.type,
              buildToastOptions(args, {
                title: args.secondaryTitle,
                message: args.secondaryMessage,
                duration: args.secondaryDuration,
              }),
            );
          }}
        >
          带标题的警告提示
        </Button>
      </div>
    </ToastProvider>
  ),
};

/**
 * 信息通知
 */
export const Info: StoryObj<PairToastArgs> = {
  name: '信息通知',
  args: {
    type: 'info',
    title: '系统通知',
    message: '页面将在5秒后刷新',
    duration: 5000,
    closable: true,
    icon: '',
    secondaryTitle: '系统通知',
    secondaryMessage: '系统将在今晚10点进行维护，请提前保存数据',
    secondaryDuration: 5000,
  },
  argTypes: pairArgTypes,
  render: (args: PairToastArgs) => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button
          onClick={() => {
            showFreshToast(
              args.type,
              buildToastOptions(args, { title: '', message: args.message }),
            );
          }}
        >
          显示信息提示
        </Button>
        <Button
          onClick={() => {
            showFreshToast(
              args.type,
              buildToastOptions(args, {
                title: args.secondaryTitle,
                message: args.secondaryMessage,
                duration: args.secondaryDuration,
              }),
            );
          }}
        >
          长通知内容
        </Button>
      </div>
    </ToastProvider>
  ),
};

/**
 * 加载通知
 */
export const Loading: StoryObj<LoadingToastArgs> = {
  name: '加载通知',
  args: {
    type: 'loading',
    title: '文件上传',
    message: '正在加载数据...',
    duration: 3000,
    closable: true,
    icon: '',
    loadingMessage: '正在加载数据...',
    loadingSuccessMessage: '加载完成',
    loadingDelay: 3000,
  },
  argTypes: loadingArgTypes,
  render: (args: LoadingToastArgs) => {
    const [loadingId, setLoadingId] = React.useState<string | null>(null);
    const timerRef = React.useRef<number | null>(null);

    React.useEffect(() => {
      return () => {
        if (timerRef.current) {
          window.clearTimeout(timerRef.current);
        }
      };
    }, []);

    const showLoading = (withTitle: boolean) => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      const id = showFreshToast('loading', {
        title: toOptionalText(args.title),
        message: withTitle ? args.loadingMessage : args.message,
        duration: 0,
        closable: args.closable,
        icon: toOptionalText(args.icon),
      });
      setLoadingId(id);

      timerRef.current = window.setTimeout(() => {
        Toast.close(id);
        showFreshToast('success', {
          title: toOptionalText(args.title),
          message: args.loadingSuccessMessage,
          duration: args.duration,
          closable: args.closable,
          icon: toOptionalText(args.icon),
        });
        setLoadingId(null);
      }, args.loadingDelay);
    };

    return (
      <ToastProvider>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => showLoading(false)}>
            显示加载中（{args.loadingDelay / 1000}秒后自动完成）
          </Button>
          <Button variant="primary" onClick={() => showLoading(true)}>
            带标题的加载提示
          </Button>
          {loadingId && (
            <Button
              onClick={() => {
                if (timerRef.current) {
                  window.clearTimeout(timerRef.current);
                  timerRef.current = null;
                }
                Toast.close(loadingId);
                setLoadingId(null);
              }}
            >
              手动关闭
            </Button>
          )}
        </div>
      </ToastProvider>
    );
  },
};

/**
 * 所有类型对比
 */
export const AllTypes: StoryObj<MultiToastArgs> = {
  name: '所有类型对比',
  args: {
    type: 'success',
    title: '所有类型对比',
    message: '操作成功',
    duration: 0,
    closable: true,
    icon: '',
    firstMessage: '操作成功',
    secondMessage: '请注意',
    thirdMessage: '操作失败',
    repeatDelay: 300,
    repeatCount: 3,
    loadingDelay: 2000,
  },
  argTypes: multiArgTypes,
  render: (args: MultiToastArgs) => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button
          size="small"
          onClick={() => {
            showFreshToast(
              'success',
              buildToastOptions(args, {
                title: args.title,
                message: args.firstMessage,
                duration: args.duration,
              }),
            );
          }}
        >
          Success
        </Button>
        <Button
          size="small"
          onClick={() => {
            showFreshToast(
              'warning',
              buildToastOptions(args, {
                title: args.title,
                message: args.secondMessage,
                duration: args.duration,
              }),
            );
          }}
        >
          Warning
        </Button>
        <Button
          size="small"
          color="danger"
          onClick={() => {
            showFreshToast(
              'error',
              buildToastOptions(args, {
                title: args.title,
                message: args.thirdMessage,
                duration: args.duration,
              }),
            );
          }}
        >
          Error
        </Button>
        <Button
          size="small"
          onClick={() => {
            showFreshToast(
              'info',
              buildToastOptions(args, {
                title: args.title,
                message: args.message,
                duration: args.duration,
              }),
            );
          }}
        >
          Info
        </Button>
        <Button
          size="small"
          onClick={() => {
            const id = showFreshToast('loading', {
              title: toOptionalText(args.title),
              message: '加载中...',
              duration: 0,
              closable: args.closable,
              icon: toOptionalText(args.icon),
            });
            window.setTimeout(() => {
              Toast.close(id);
            }, args.loadingDelay || 2000);
          }}
        >
          Loading
        </Button>
      </div>
    </ToastProvider>
  ),
};

/**
 * 多条通知堆叠
 */
export const MultipleToasts: StoryObj<MultiToastArgs> = {
  name: '多条通知堆叠',
  args: {
    type: 'success',
    title: '第一条通知',
    message: '第一条通知',
    duration: 3000,
    closable: true,
    icon: '',
    firstMessage: '第一条通知',
    secondMessage: '第二条通知',
    thirdMessage: '第三条通知',
    repeatDelay: 300,
    repeatCount: 5,
  },
  argTypes: multiArgTypes,
  render: (args: MultiToastArgs) => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button
          variant="primary"
          onClick={() => {
            showFreshToast(
              args.type,
              buildToastOptions(args, { title: args.title, message: args.firstMessage }),
            );
            window.setTimeout(
              () =>
                showFreshToast(
                  'info',
                  buildToastOptions(args, { title: args.title, message: args.secondMessage }),
                ),
              args.repeatDelay,
            );
            window.setTimeout(
              () =>
                showFreshToast(
                  'warning',
                  buildToastOptions(args, { title: args.title, message: args.thirdMessage }),
                ),
              args.repeatDelay * 2,
            );
          }}
        >
          显示多条通知
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            Toast.clear();
            for (let i = 1; i <= args.repeatCount; i++) {
              window.setTimeout(
                () => {
                  Toast.show({
                    type: 'info',
                    title: toOptionalText(args.title),
                    message: `${args.firstMessage} ${i}`,
                    duration: args.duration,
                    closable: args.closable,
                    icon: toOptionalText(args.icon),
                  });
                },
                (i - 1) * args.repeatDelay,
              );
            }
          }}
        >
          快速显示5条通知
        </Button>
        <Button variant="ghost" onClick={() => Toast.clear()}>
          清空所有通知
        </Button>
      </div>
    </ToastProvider>
  ),
};

/**
 * 自定义时长
 */
export const CustomDuration: StoryObj<DurationToastArgs> = {
  name: '自定义时长',
  args: {
    type: 'success',
    title: '自定义时长',
    message: '1秒后关闭',
    duration: 1000,
    closable: true,
    icon: '',
    shortMessage: '1秒后关闭',
    shortDuration: 1000,
    longMessage: '5秒后关闭',
    longDuration: 5000,
    manualMessage: '不会自动关闭，需手动关闭',
  },
  argTypes: durationArgTypes,
  render: (args: DurationToastArgs) => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button
          onClick={() => {
            showFreshToast(
              args.type,
              buildToastOptions(args, {
                title: args.title,
                message: args.shortMessage,
                duration: args.shortDuration,
              }),
            );
          }}
        >
          1秒后自动关闭
        </Button>
        <Button
          onClick={() => {
            showFreshToast(
              'info',
              buildToastOptions(args, {
                title: args.title,
                message: args.longMessage,
                duration: args.longDuration,
              }),
            );
          }}
        >
          5秒后自动关闭
        </Button>
        <Button
          onClick={() => {
            showFreshToast(
              'warning',
              buildToastOptions(args, {
                title: args.title,
                message: args.manualMessage,
                duration: 0,
                closable: true,
              }),
            );
          }}
        >
          永不自动关闭
        </Button>
      </div>
    </ToastProvider>
  ),
};

/**
 * 自定义图标
 */
export const CustomIcon: StoryObj<IconToastArgs> = {
  name: '自定义图标',
  args: {
    type: 'success',
    title: '自定义图标',
    message: '任务完成',
    duration: 3000,
    closable: true,
    icon: '🎉',
    emojiIcon: '🎉',
    textIcon: '★',
    infoMessage: '提示信息',
    textMessage: '使用任意内容作为图标',
  },
  argTypes: iconArgTypes,
  render: (args: IconToastArgs) => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button
          onClick={() => {
            showFreshToast(
              args.type,
              buildToastOptions(args, {
                title: args.title,
                message: args.message,
                icon: args.emojiIcon,
              }),
            );
          }}
        >
          使用 Emoji 图标
        </Button>
        <Button
          onClick={() => {
            showFreshToast(
              'info',
              buildToastOptions(args, { title: args.title, message: args.infoMessage, icon: '📌' }),
            );
          }}
        >
          Emoji 提示符
        </Button>
        <Button
          onClick={() => {
            showFreshToast(
              'success',
              buildToastOptions(args, {
                title: args.title,
                message: args.textMessage,
                icon: args.textIcon,
              }),
            );
          }}
        >
          使用文本符号
        </Button>
      </div>
    </ToastProvider>
  ),
};

/**
 * 回调函数
 */
export const Callbacks: StoryObj<CallbackToastArgs> = {
  name: '回调函数',
  args: {
    type: 'success',
    title: '已保存',
    message: '已保存',
    duration: 3000,
    closable: true,
    icon: '',
    callbackLabel: '成功通知已关闭',
  },
  argTypes: callbackArgTypes,
  render: (args: CallbackToastArgs) => {
    const [log, setLog] = React.useState<string[]>([]);

    const addLog = (msg: string) => {
      setLog((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
    };

    return (
      <ToastProvider>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button
            onClick={() => {
              showFreshToast(args.type, {
                ...buildToastOptions(args),
                onClose: () => addLog(args.callbackLabel),
              });
            }}
          >
            显示带回调的通知
          </Button>
          <div
            style={{
              padding: '12px',
              backgroundColor: '#f5f5f5',
              borderRadius: '6px',
              maxHeight: '200px',
              overflowY: 'auto',
              fontFamily: 'monospace',
              fontSize: '12px',
            }}
          >
            {log.length === 0 ? (
              <p style={{ margin: 0, color: '#999' }}>操作日志会显示在这里...</p>
            ) : (
              log.map((item, idx) => (
                <div key={idx} style={{ margin: '4px 0', color: '#333' }}>
                  {item}
                </div>
              ))
            )}
          </div>
          <Button size="small" variant="ghost" onClick={() => setLog([])}>
            清空日志
          </Button>
        </div>
      </ToastProvider>
    );
  },
};

/**
 * 长内容处理
 */
export const LongContent: StoryObj<LongContentToastArgs> = {
  name: '长内容处理',
  args: {
    type: 'warning',
    title: '操作需要确认',
    message:
      '这是一个很长的消息内容。Toast 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行，不会影响整体的布局。',
    duration: 5000,
    closable: true,
    icon: '',
    longMessage:
      '这是一个很长的消息内容。Toast 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行，不会影响整体的布局。',
  },
  argTypes: longContentArgTypes,
  render: (args: LongContentToastArgs) => (
    <ToastProvider>
      <Button
        onClick={() => {
          showFreshToast(
            args.type,
            buildToastOptions(args, {
              title: args.title,
              message: args.longMessage,
              duration: args.duration,
            }),
          );
        }}
      >
        显示长内容通知
      </Button>
    </ToastProvider>
  ),
};

/**
 * 无需 Provider 的命令式用法示例
 * 在没有显式包裹 `ToastProvider` 时，直接调用 `Toast` 会自动在 `document.body` 创建宿主容器并渲染
 * 适用于简单场景或临时使用，无需手动添加 Provider，注意不要在 SSR 环境调用
 */
export const ImperativeNoProvider: StoryObj<BaseToastArgs> = {
  name: '命令式（无需 Provider）',
  args: {
    type: 'success',
    title: '直接调用 Toast.success',
    message: '直接调用 Toast.success，无需 Provider',
    duration: 3000,
    closable: true,
    icon: '',
  },
  argTypes: baseArgTypes,
  render: (args: BaseToastArgs) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button
        variant="primary"
        onClick={() => {
          showFreshToast(args.type, buildToastOptions(args));
        }}
      >
        直接调用（自动挂载）
      </Button>
    </div>
  ),
};

/**
 * 通过参数 limitToProvider限定在 Provider 范围内的示例
 */
export const LimitedToProvider: StoryObj<ProviderToastArgs> = {
  name: '限定在 Provider 范围内',
  args: {
    type: 'success',
    title: 'Toast 限定容器（内部）',
    message: '仅在此容器内显示通知',
    duration: 3000,
    closable: true,
    icon: '',
    insideMessage: '仅在此容器内显示通知',
    outsideMessage: '在页面其他位置调用 Toast',
  },
  argTypes: providerArgTypes,
  render: (args: ProviderToastArgs) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <ToastProvider limitToProvider>
        <div
          style={{
            width: 660,
            height: 220,
            border: '2px dashed #9aa4b2',
            borderRadius: 8,
            padding: 12,
            position: 'relative',
            overflow: 'auto',
          }}
        >
          <div style={{ marginBottom: 8, color: '#556', fontSize: 13 }}>Toast 限定容器（内部）</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Button
              variant="primary"
              onClick={() => {
                showFreshToast(
                  args.type,
                  buildToastOptions(args, { title: args.title, message: args.insideMessage }),
                );
              }}
            >
              在容器内显示 Toast
            </Button>
            <Button variant="ghost" onClick={() => Toast.clear()}>
              清空
            </Button>
          </div>
        </div>
      </ToastProvider>

      <div style={{ width: 240 }}>
        <div style={{ marginBottom: 8, color: '#556', fontSize: 13 }}>页面其他位置</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button
            onClick={() => {
              showFreshToast(
                args.type,
                buildToastOptions(args, { title: args.title, message: args.outsideMessage }),
              );
            }}
          >
            在页面其他位置调用
          </Button>
        </div>
      </div>
    </div>
  ),
};
