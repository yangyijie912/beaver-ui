import { useCallback, useState } from 'react';
import type { SelectOption } from '../Select';
import type { SelectOptionWithNew } from './useFilteredOptions';

/**
 * useKeyboardNavigation
 *
 * 该 hook 将与键盘导航和菜单高亮相关的逻辑抽离：
 * - 管理 `highlighted` 索引状态（当前高亮的下拉项）
 * - 处理常见键位：ArrowUp/ArrowDown（上下移动高亮）、Enter/空格（选择）、Escape（关闭）、Home/End（跳转首尾）
 * - 支持将字符输入与 Backspace 委托给外部处理器（用于 typeahead 场景），以便把复杂的输入合并/清理逻辑放到 `useTypeahead` 中
 * - 当菜单为关闭状态时，按箭头键会先打开菜单并初始化高亮
 *
 * 参数（UseKeyboardNavigationParams）：
 * - displayOptions: 当前待展示的下拉项数组（包括可能的 __isNew 项）
 * - open / setOpen: 控制菜单打开/关闭
 * - handleSelectByValue: 当按下 Enter/空格或回车时触发选中回调
 * - isDisabled: 禁用时忽略键盘事件
 * - onBackspace / onChar: 可选的外部处理器，用于处理退格与字符输入（委托给 typeahead）
 *
 * 返回值：{ highlighted, setHighlighted, onKeyDown }
 */
export type UseKeyboardNavigationParams = {
  displayOptions: (SelectOption | SelectOptionWithNew)[];
  open: boolean;
  setOpen: (v: boolean) => void;
  handleSelectByValue: (value: string) => void;
  isDisabled?: boolean;
  multiple?: boolean;
  onBackspace?: (e: React.KeyboardEvent) => void;
  onChar?: (e: React.KeyboardEvent) => void;
};

export default function useKeyboardNavigation({
  displayOptions,
  open,
  setOpen,
  handleSelectByValue,
  isDisabled = false,
  onBackspace,
  onChar,
}: UseKeyboardNavigationParams) {
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (isDisabled) return;
      // 如果菜单打开且按下 Backspace 键，阻止默认行为并调用外部 onBackspace 处理器
      if (open && e.key === 'Backspace') {
        e.preventDefault();
        if (onBackspace) {
          onBackspace(e);
          return;
        }
      }
      if (open && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        // 如果菜单打开且输入字符，阻止默认行为并调用外部 onChar 处理器
        if (onChar) {
          e.preventDefault();
          onChar(e);
          return;
        }
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        setHighlighted((h) => {
          const src = displayOptions;
          // 查找当前高亮项之后的下一个可用索引（如果 h 为 null，则从头开始）
          const start = h === null ? -1 : h;
          for (let i = start + 1; i < src.length; i++) {
            if (!src[i].disabled) return i;
          }
          // 没有下一个可用项，保持当前高亮
          return h;
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        setHighlighted((h) => {
          const src = displayOptions;
          const start = h === null ? src.length : h;
          for (let i = start - 1; i >= 0; i--) {
            if (!src[i].disabled) return i;
          }
          return h;
        });
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!open) {
          setOpen(true);
        } else if (highlighted !== null) {
          const opt = displayOptions[highlighted];
          if (opt && !opt.disabled) handleSelectByValue(opt.value);
        }
      } else if (e.key === 'Escape') {
        setOpen(false);
      } else if (e.key === 'Home') {
        e.preventDefault();
        const firstIdx = displayOptions.findIndex((o) => !o.disabled);
        setHighlighted(firstIdx >= 0 ? firstIdx : 0);
      } else if (e.key === 'End') {
        e.preventDefault();
        const lastIdx = displayOptions.map((o) => (o.disabled ? -1 : 1)).lastIndexOf(1);
        setHighlighted(lastIdx >= 0 ? lastIdx : displayOptions.length - 1);
      }
    },
    [displayOptions, open, setOpen, handleSelectByValue, highlighted, isDisabled, onBackspace, onChar]
  );

  return { highlighted, setHighlighted, onKeyDown } as const;
}
