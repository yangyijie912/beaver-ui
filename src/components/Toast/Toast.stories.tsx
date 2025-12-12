import React from 'react';
import Toast, { ToastProvider } from './Toast';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button/Button';

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
  title: 'Components/Toast',
  tags: ['autodocs'],
};

export default meta;

/**
 * 成功通知
 */
export const Success: StoryObj = {
  name: '成功通知',
  render: () => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button
          variant="primary"
          onClick={() => {
            Toast.success('保存成功');
          }}
        >
          显示成功提示
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            Toast.success('个人资料已更新', { title: '保存成功' });
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
export const Error: StoryObj = {
  name: '错误通知',
  render: () => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button
          color="danger"
          onClick={() => {
            Toast.error('操作失败，请重试');
          }}
        >
          显示错误提示
        </Button>
        <Button
          color="danger"
          onClick={() => {
            Toast.error('网络连接失败，请检查网络设置', {
              title: '操作失败',
              duration: 5000,
            });
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
export const Warning: StoryObj = {
  name: '警告通知',
  render: () => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button
          onClick={() => {
            Toast.warning('此操作不可撤销');
          }}
        >
          显示警告提示
        </Button>
        <Button
          onClick={() => {
            Toast.warning('你有2条未读消息需要处理', {
              title: '提醒',
            });
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
export const Info: StoryObj = {
  name: '信息通知',
  render: () => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button
          onClick={() => {
            Toast.info('页面将在5秒后刷新');
          }}
        >
          显示信息提示
        </Button>
        <Button
          onClick={() => {
            Toast.info('系统将在今晚10点进行维护，请提前保存数据', {
              title: '系统通知',
              duration: 5000,
            });
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
export const Loading: StoryObj = {
  name: '加载通知',
  render: () => {
    const [loadingId, setLoadingId] = React.useState<string | null>(null);

    const handleStartLoading = () => {
      const id = Toast.loading('正在加载数据...');
      setLoadingId(id);

      setTimeout(() => {
        Toast.close(id);
        Toast.success('加载完成');
      }, 3000);
    };

    return (
      <ToastProvider>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="primary" onClick={handleStartLoading}>
            显示加载中（3秒后自动完成）
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const id = Toast.loading('处理中...', { title: '文件上传' });
              setLoadingId(id);
            }}
          >
            带标题的加载提示
          </Button>
          {loadingId && (
            <Button
              onClick={() => {
                if (loadingId) {
                  Toast.close(loadingId);
                  setLoadingId(null);
                }
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
export const AllTypes: StoryObj = {
  name: '所有类型对比',
  render: () => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button size="small" onClick={() => Toast.success('操作成功', { duration: 0 })}>
          Success
        </Button>
        <Button size="small" onClick={() => Toast.warning('请注意', { duration: 0 })}>
          Warning
        </Button>
        <Button size="small" color="danger" onClick={() => Toast.error('操作失败', { duration: 0 })}>
          Error
        </Button>
        <Button size="small" onClick={() => Toast.info('提示信息', { duration: 0 })}>
          Info
        </Button>
        <Button
          size="small"
          onClick={() => {
            const id = Toast.loading('加载中...');
            setTimeout(() => Toast.close(id), 2000);
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
export const MultipleToasts: StoryObj = {
  name: '多条通知堆叠',
  render: () => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button
          variant="primary"
          onClick={() => {
            Toast.success('第一条通知');
            setTimeout(() => Toast.info('第二条通知'), 300);
            setTimeout(() => Toast.warning('第三条通知'), 600);
          }}
        >
          显示多条通知
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            for (let i = 1; i <= 5; i++) {
              setTimeout(
                () => {
                  Toast.info(`通知 ${i}`);
                },
                (i - 1) * 300
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
export const CustomDuration: StoryObj = {
  name: '自定义时长',
  render: () => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button
          onClick={() => {
            Toast.success('1秒后关闭', { duration: 1000 });
          }}
        >
          1秒后自动关闭
        </Button>
        <Button
          onClick={() => {
            Toast.info('5秒后关闭', { duration: 5000 });
          }}
        >
          5秒后自动关闭
        </Button>
        <Button
          onClick={() => {
            Toast.warning('不会自动关闭，需手动关闭', { duration: 0, closable: true });
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
export const CustomIcon: StoryObj = {
  name: '自定义图标',
  render: () => (
    <ToastProvider>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button
          onClick={() => {
            Toast.success('任务完成', { icon: '🎉' });
          }}
        >
          使用 Emoji 图标
        </Button>
        <Button
          onClick={() => {
            Toast.info('提示信息', { icon: '📌' });
          }}
        >
          Emoji 提示符
        </Button>
        <Button
          onClick={() => {
            Toast.show({
              type: 'success',
              title: '自定义图标',
              message: '使用任意内容作为图标',
              icon: '★',
            });
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
export const Callbacks: StoryObj = {
  name: '回调函数',
  render: () => {
    const [log, setLog] = React.useState<string[]>([]);

    const addLog = (msg: string) => {
      setLog((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
    };

    return (
      <ToastProvider>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button
            onClick={() => {
              Toast.success('已保存', {
                onClose: () => addLog('成功通知已关闭'),
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
export const LongContent: StoryObj = {
  name: '长内容处理',
  render: () => (
    <ToastProvider>
      <Button
        onClick={() => {
          Toast.show({
            type: 'warning',
            title: '操作需要确认',
            message:
              '这是一个很长的消息内容。Toast 组件能够正确地处理多行文本，并确保内容的可读性。当内容超过容器宽度时，文本会自动换行，不会影响整体的布局。',
            duration: 5000,
          });
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
export const ImperativeNoProvider: StoryObj = {
  name: '命令式（无需 Provider）',
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button
        variant="primary"
        onClick={() => {
          Toast.success('直接调用 Toast.success，无需 Provider');
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
export const LimitedToProvider: StoryObj = {
  name: '限定在 Provider 范围内',
  render: () => (
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
          <div style={{ display: 'flex', gap: 8 }}>
            <Button
              variant="primary"
              onClick={() => {
                Toast.success('仅在此容器内显示通知');
              }}
            >
              在容器内显示 Toast
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                Toast.clear();
              }}
            >
              清空
            </Button>
          </div>
        </div>
      </ToastProvider>

      <div style={{ width: 240 }}>
        <div style={{ marginBottom: 8, color: '#556', fontSize: 13 }}>页面其他位置</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button
            onClick={() => {
              Toast.success('在页面其他位置调用 Toast');
            }}
          >
            在页面其他位置调用
          </Button>
        </div>
      </div>
    </div>
  ),
};
