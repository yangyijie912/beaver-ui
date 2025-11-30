import { useRef } from 'react';
import type { SelectOption } from '../Select';

/**
 * useTypeahead
 *
 * 该 hook 封装了输入时的 typeahead 行为，提供：
 * - 处理单字符输入 (handleChar)：合并到当前 query 或在特定场景替换（非用户输入的回显场景），并触发定时清理
 * - 处理退格 (handleBackspace)：在用户首次退格时按语义处理（如果之前不是用户输入则清空），并触发定时清理
 * - 定时清理 (clear)：用于在一段时间后清空 query，避免 typeahead 状态长期存在
 * - userTypedRef：一个可复用的 ref，用于标记用户是否已主动输入（外部可以传入同一个 ref 以保持一致性）
 *
 * 注意：hook 不直接对 UI 做任何操作，只提供对 query/setQuery 的操作以及计算高亮索引的辅助逻辑（通过 setHighlighted 回调）。
 */

export type UseTypeaheadHandlers = {
  handleBackspace: (opts: {
    query: string;
    setQuery: (v: string) => void;
    options: SelectOption[];
    setHighlighted: (v: number) => void;
  }) => void;
  handleChar: (opts: {
    key: string;
    query: string;
    setQuery: (v: string) => void;
    options: SelectOption[];
    multiple?: boolean;
    searchable?: boolean;
    setHighlighted: (v: number) => void;
  }) => void;
  clear: () => void;
  userTypedRef: React.MutableRefObject<boolean>;
};

export default function useTypeahead(
  timeout = 700,
  externalUserTypedRef?: React.MutableRefObject<boolean>
): UseTypeaheadHandlers {
  const timer = useRef<number | null>(null);
  const userTypedRef = externalUserTypedRef ?? useRef<boolean>(false);

  function clear() {
    if (timer.current) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
  }

  function scheduleClear(setQuery: (v: string) => void) {
    clear();
    timer.current = window.setTimeout(() => setQuery(''), timeout) as unknown as number;
  }

  function handleBackspace({ query, setQuery, options, setHighlighted }: any) {
    const wasUserTyped = userTypedRef.current;
    const newQ = wasUserTyped ? query.slice(0, -1) : '';
    userTypedRef.current = true;
    setQuery(newQ);
    scheduleClear(setQuery);
    const src = newQ
      ? options.filter(
          (o: SelectOption) =>
            o.label.toLowerCase().includes(newQ.trim().toLowerCase()) ||
            o.value.toLowerCase().includes(newQ.trim().toLowerCase())
        )
      : options;
    const firstIdx = src.findIndex((o: SelectOption) => !o.disabled);
    setHighlighted(firstIdx >= 0 ? firstIdx : 0);
  }

  function handleChar({ key, query, setQuery, options, multiple, searchable, setHighlighted }: any) {
    const newQ = !userTypedRef.current && !multiple && searchable ? key : query + key;
    userTypedRef.current = true;
    setQuery(newQ);
    scheduleClear(setQuery);
    const q = newQ.trim().toLowerCase();
    const src = q
      ? options.filter((o: SelectOption) => o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q))
      : options;
    const firstIdx = src.findIndex((o: SelectOption) => !o.disabled);
    setHighlighted(firstIdx >= 0 ? firstIdx : 0);
  }

  return {
    handleBackspace,
    handleChar,
    clear,
    userTypedRef,
  };
}
