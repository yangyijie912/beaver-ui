import React from 'react';
import { createRoot } from 'react-dom/client';
import Toast, { ToastProvider } from '../components/Toast/Toast';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import '../tokens/tokens.css';

/**
 * Toast 全局通知组件测试页面
 * 包含多个场景演示，支持页面跳转
 */

// 表单提交结果的全局状态
interface FormResult {
  email: string;
  timestamp: string;
}

let _formResult: FormResult | null = null;

// 表单验证演示
const FormDemo = ({ onNavigate }: { onNavigate: (page: 'form' | 'async' | 'result') => void }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // 表单提交：验证通过后提交，成功则跳转，失败则直接提示
  const handleFormSubmit = async () => {
    // 简单验证：只检查是否为空
    if (!email) {
      Toast.warning('请输入邮箱');
      return;
    }
    if (!password) {
      Toast.warning('请输入密码');
      return;
    }

    // 模拟提交
    setIsSubmitting(true);
    const loadingId = Toast.loading('正在提交表单...', { title: '请稍候' });

    // 模拟网络请求（1秒）
    await new Promise((resolve) => setTimeout(resolve, 1000));

    Toast.close(loadingId);

    // 随机模拟成功或失败
    const isSuccess = Math.random() > 0.3;

    if (isSuccess) {
      // 成功：保存结果、显示成功提示、跳转页面
      _formResult = {
        email,
        timestamp: new Date().toLocaleString('zh-CN'),
      };

      Toast.success('表单提交成功', { title: '成功提交', duration: 2000 });

      onNavigate('result');
    } else {
      // 失败：直接显示错误提示，不跳转
      Toast.error('服务器请求失败，请稍后重试', {
        title: '提交失败',
        duration: 3000,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Toast 表单提交演示</h2>
      <div style={{ maxWidth: 500 }}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 500 }}>邮箱</label>
          <Input
            type="email"
            placeholder="请输入邮箱地址"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 500 }}>密码</label>
          <Input
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <Button variant="primary" onClick={handleFormSubmit} disabled={isSubmitting} style={{ width: '100%' }}>
          {isSubmitting ? '提交中...' : '提交表单（成功率 70%）'}
        </Button>
        <p style={{ fontSize: 13, color: '#999', marginTop: 8, margin: '8px 0 0 0' }}>
          失败：直接显示错误提示 | 成功：Toast 全局通知后跳转结果页
        </p>
      </div>
    </div>
  );
};

// 表单提交结果页面（成功后跳转到这里）
const ResultDemo = ({ onNavigate }: { onNavigate: (page: 'form' | 'async' | 'result') => void }) => {
  // 检查是否有有效的结果数据
  const hasResult = _formResult !== null;

  return (
    <div style={{ padding: 24 }}>
      <h2>📋 表单提交结果</h2>
      <div style={{ maxWidth: 500 }}>
        {hasResult ? (
          <>
            <div
              style={{
                backgroundColor: '#f0fdf4',
                border: '1px solid #22c55e',
                borderRadius: 8,
                padding: 20,
                marginBottom: 24,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontSize: 32, marginRight: 12 }}>✓</span>
                <h3 style={{ margin: 0, color: '#16a34a' }}>提交成功！</h3>
              </div>

              <div style={{ backgroundColor: '#fff', padding: 16, borderRadius: 4, marginBottom: 16 }}>
                <div style={{ marginBottom: 12 }}>
                  <label style={{ fontSize: 12, color: '#999', fontWeight: 500 }}>邮箱地址</label>
                  <p style={{ margin: '4px 0 0 0', fontSize: 14, fontWeight: 500 }}>{_formResult!.email}</p>
                </div>
                <div>
                  <label style={{ fontSize: 12, color: '#999', fontWeight: 500 }}>提交时间</label>
                  <p style={{ margin: '4px 0 0 0', fontSize: 14 }}>{_formResult!.timestamp}</p>
                </div>
              </div>

              <p style={{ margin: 0, fontSize: 14, color: '#666' }}>✓ 表单已成功提交！您将收到一封确认邮件</p>
            </div>

            {/* 清空结果并返回 */}
            <Button
              variant="ghost"
              onClick={() => {
                _formResult = null;
                onNavigate('form');
              }}
              style={{ width: '100%' }}
            >
              返回表单继续提交
            </Button>
          </>
        ) : (
          <div
            style={{
              backgroundColor: '#fef3c7',
              border: '1px solid #f59e0b',
              borderRadius: 8,
              padding: 20,
              marginBottom: 24,
            }}
          >
            <p style={{ margin: 0, marginBottom: 16 }}>⚠ 没有待显示的提交结果，请从表单页面提交表单</p>
            <Button size="small" variant="ghost" onClick={() => onNavigate('form')} style={{ width: '100%' }}>
              返回表单提交
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// 页面4：异步操作演示
const AsyncDemo = ({}: { onNavigate: (page: 'form' | 'async' | 'result') => void }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  // 模拟API调用
  const simulateApiCall = async (duration: number, success: boolean) => {
    setIsLoading(true);
    const toastId = Toast.loading('正在处理...', { title: '请稍候' });

    await new Promise((resolve) => setTimeout(resolve, duration));

    Toast.close(toastId);

    if (success) {
      Toast.success('操作完成！', { title: '成功', duration: 3000 });
    } else {
      Toast.error('操作失败，请重试', { title: '错误' });
    }

    setIsLoading(false);
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Toast 异步操作演示</h2>
      <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <h4>模拟网络请求</h4>
          <Button variant="primary" disabled={isLoading} onClick={() => simulateApiCall(2000, true)}>
            {isLoading ? '加载中...' : '发起请求（2秒后成功）'}
          </Button>
        </div>

        <div>
          <h4>失败场景</h4>
          <Button color="danger" disabled={isLoading} onClick={() => simulateApiCall(1500, false)}>
            {isLoading ? '加载中...' : '发起请求（1.5秒后失败）'}
          </Button>
        </div>

        <div>
          <h4>快速操作</h4>
          <Button disabled={isLoading} onClick={() => simulateApiCall(500, true)}>
            {isLoading ? '加载中...' : '发起请求（0.5秒后完成）'}
          </Button>
        </div>

        <div>
          <h4>多步骤演示</h4>
          <Button
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true);
              const step1 = Toast.loading('步骤 1/3: 连接服务器...');
              setTimeout(() => {
                Toast.close(step1);
                const step2 = Toast.loading('步骤 2/3: 上传数据...');
                setTimeout(() => {
                  Toast.close(step2);
                  const step3 = Toast.loading('步骤 3/3: 处理数据...');
                  setTimeout(() => {
                    Toast.close(step3);
                    Toast.success('全部完成！', { title: '操作成功' });
                    setIsLoading(false);
                  }, 800);
                }, 800);
              }, 800);
            }}
          >
            {isLoading ? '处理中...' : '多步骤操作（2.4秒）'}
          </Button>
        </div>
      </div>
    </div>
  );
};

// 主应用组件
function ToastTestApp() {
  const [currentPage, setCurrentPage] = React.useState<'form' | 'async' | 'result'>('form');

  const renderPage = () => {
    switch (currentPage) {
      case 'form':
        return <FormDemo onNavigate={setCurrentPage} />;
      case 'async':
        return <AsyncDemo onNavigate={setCurrentPage} />;
      case 'result':
        return <ResultDemo onNavigate={setCurrentPage} />;
      default:
        return <FormDemo onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* 顶部导航栏 */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb', padding: '12px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ margin: '0 0 12px 0', fontSize: 24 }}>Toast 通知组件测试</h1>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Button
              size="small"
              variant={currentPage === 'form' ? 'primary' : 'ghost'}
              onClick={() => setCurrentPage('form')}
            >
              表单验证
            </Button>
            <Button
              size="small"
              variant={currentPage === 'async' ? 'primary' : 'ghost'}
              onClick={() => setCurrentPage('async')}
            >
              异步操作
            </Button>
            <Button size="small" variant="ghost" onClick={() => Toast.clear()}>
              清空所有通知
            </Button>
          </div>
        </div>
      </div>

      {/* 页面内容 */}
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          backgroundColor: '#fff',
          marginTop: 24,
          borderRadius: 8,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        {renderPage()}
      </div>
    </div>
  );
}

// 挂载应用
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <ToastProvider>
    <ToastTestApp />
  </ToastProvider>
);
