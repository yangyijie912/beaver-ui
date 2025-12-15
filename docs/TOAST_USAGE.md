# Toast 使用说明

该文档说明 `Toast` 组件库的使用方式、两种推荐 API（Provider 与命令式单例）、以及 SSR 与测试注意事项。

## 导出 API

来自组件：

- `ToastProvider`：React 组件。推荐在应用根节点挂载以提供可配置的全局通知能力。
- `useToast()`：库当前主要通过 `Toast` 命令式 API 暴露，但保留 hook 模式（如将来扩展）。
- 默认导出 `Toast`：命令式 API，包含 `success`, `warning`, `error`, `info`, `loading`, `show`, `close`, `clear`。

## 两种使用模式

1. 推荐（可配置、可测试）—— `ToastProvider` + `Toast` 或 hook

```tsx
import Toast, { ToastProvider } from 'beaver-ui/components/Toast/Toast';

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

// 在任意子组件中
Toast.success('保存成功', { title: '成功' });
```

优点：可集中配置、便于测试与样式定制。

2. 便捷（无需显式 Provider）—— 直接使用命令式 API

```tsx
import Toast from 'beaver-ui/components/Toast/Toast';

// 在任何客户端代码中直接调用：
Toast.info('无需显式 Provider，即可显示');
```

实现细节：首次调用命令式 API 时，库会在浏览器端懒创建一个挂载点（`<div id="beaver-toast-root">`）并渲染 Toast 容器；如果页面存在 `ToastProvider`，则 Provider 优先，默认宿主会自动卸载以避免重复渲染。

## SSR 注意事项

- 在服务器端导入该模块不会创建 DOM 容器或抛错。只有在客户端（`typeof window !== 'undefined'`）才会懒创建宿主。请避免在 SSR 阶段调用 `Toast.*` 来显示 UI（例如在服务器端渲染期间调用）。

## 多 Provider 情况

如果页面上存在多个 `ToastProvider`，它们都可以注册为 Provider，`Toast` 命令式 API 会由注册的 Provider 处理（优先使用显式注册的 Provider）。

## 测试

- 对于命令式 API：测试时可以在 DOM 中创建一个容器或手动调用 `Toast.clear()` 清理状态。
- 对于 Provider：推荐使用 `ToastProvider` 包裹测试渲染树并断言 DOM 输出。

## 其他

如需暴露配置（例如位置 top/bottom、间距、最大显示数），建议通过 `ToastProvider` 的 props 扩展，而命令式 API 仅使用默认行为或接受局部覆盖选项。

## Next.js 使用指南（详细）

在 Next.js（尤其是 App Router）中，有两类组件：服务器组件（默认）与客户端组件（`'use client'`）。因为命令式 `Toast` 依赖浏览器 DOM（portal 渲染到 `document.body`），所以不要在服务器组件中直接调用 `Toast.*`。下面给出推荐实践与几种常见模式。

### 推荐做法：把 `ToastProvider` 放在 client Providers（根）

把 `ToastProvider` 放到一个 client component 并在根 layout 中使用。这样应用中所有 client-side 的交互都能使用 `Toast`。示例（App Router）：

文件：`app/providers.tsx`

```tsx
'use client';
import React from 'react';
import { ToastProvider } from 'beaver-ui/components/Toast/Toast';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
```

在 `app/layout.tsx` 中引入：

```tsx
import Providers from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

现在在任何 client-side 代码（事件处理、hook 等）里都可以直接调用：

```tsx
// client component
import Toast from 'beaver-ui/components/Toast/Toast';

function SaveButton() {
  const onSave = async () => {
    // 做某些客户端行为或在 action 成功返回后
    Toast.success('保存成功');
  };
  return <button onClick={onSave}>保存</button>;
}
```

### 从服务器触发（server -> client flash）

如果你需要在服务器端处理完成后在客户端显示一次提示（例如表单提交后重定向并显示“提交成功”），不要在服务器组件直接调用 `Toast`。推荐模式是：服务器把消息放到短期存储（cookie/session/URL param），客户端在加载时读取并触发 `Toast`，随后清除该存储。

示例流程（cookie）：

1. Server action（或 API）设置 flash cookie 并重定向：

```ts
// app/actions/save.ts (server)
import { cookies } from 'next/headers';

export async function saveData(data: any) {
  // 处理保存
  cookies().set('beaver_flash', 'success:保存成功');
  return { redirect: '/result' };
}
```

2. 在客户端根 Providers（上面 `Providers` 文件）或某个顶层 client component 中检查 cookie 并触发 Toast：

```tsx
'use client';
import React from 'react';
import Toast from 'beaver-ui/components/Toast/Toast';

export default function FlashReader() {
  React.useEffect(() => {
    try {
      const cookie = document.cookie.split('; ').find((c) => c.startsWith('beaver_flash='));
      if (!cookie) return;
      const val = decodeURIComponent(cookie.split('=')[1] || '');
      const [type, msg] = val.split(':');
      if (type === 'success') Toast.success(msg);
      // 清除 cookie
      document.cookie = 'beaver_flash=; path=/; max-age=0';
    } catch (e) {
      // noop
    }
  }, []);

  return null;
}
```

然后把 `FlashReader` 放到 `Providers` 中或 `app/layout` 的 client 部分以便在页面加载时触发。

### 实时通知（WebSocket / SSE）

如果希望服务器在任意时刻向已打开的页面推送通知，应使用 WebSocket、SSE 或 Push。收到消息后，客户端回调再调用 `Toast.*` 来显示。

### API 与 SSR 友好性总结

- `Toast.*` 命令式 API：只应在客户端调用。库内部安全检查 `typeof window !== 'undefined'`，在服务器端为 noop，但从体验上请勿在服务端直接调用。
- `ToastProvider`：放在 client Providers（根）最安全，且便于统一配置（位置、样式、限流等）。
- service -> client flash：使用 cookie/redirect 或其他短期存储桥接服务器到客户端的提示。

---

## 快速示例（可拷贝）

1. 事件总线（客户端内通用）

文件：`src/lib/toastBus.ts`

```ts
const bus = new EventTarget();
export function emitToast(type: 'success' | 'error' | 'info', msg: string) {
  bus.dispatchEvent(new CustomEvent('beaver:toast', { detail: { type, msg } }));
}
export function onToast(fn: (type: string, msg: string) => void) {
  const handler = (e: Event) => {
    const d = (e as CustomEvent).detail;
    fn(d.type, d.msg);
  };
  bus.addEventListener('beaver:toast', handler);
  return () => bus.removeEventListener('beaver:toast', handler);
}
```

在 `Providers` 中订阅并调用 `Toast`：

```tsx
'use client';
import { useEffect } from 'react';
import { onToast } from '@/lib/toastBus';
import Toast from 'beaver-ui/components/Toast/Toast';

export default function ToastBusSubscriber() {
  useEffect(() => {
    const off = onToast((type, msg) => {
      (Toast as any)[type]?.(msg);
    });
    return off;
  }, []);
  return null;
}
```

2. 跨标签页同步（可选）

如果需要跨浏览器标签页同步通知，可以把事件通过 `BroadcastChannel` 或 `localStorage` 事件广播，然后在每个页面上触发 `Toast`。

3. 快速 cookie flash 回顾

服务器写短期 cookie，客户端 `FlashReader` 在首个 client mount 时读取并触发一次 `Toast`，随后清除 cookie（见上文详细示例）。
