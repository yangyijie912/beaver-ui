import { useEffect, useState } from 'react';

/**
 * useSelectState
 *
 * 该 hook 统一管理组件的受控/非受控值同步逻辑：
 * - 支持从外部传入 `value`（controlledValue）或使用 `defaultValue`（非受控）
 * - 当 `controlledValue` 发生变化时，优先同步到内部状态 `internalValue`
 * - 返回 `{ internalValue, setInternalValue }` 供上层组件使用
 *
 * 目的：把受控/非受控同步的职责抽离出来，避免在 `Select.tsx` 中重复处理边界条件。
 */
export type UseSelectStateParams = {
  controlledValue?: string | string[];
  defaultValue?: string | string[];
  multiple?: boolean;
};

export default function useSelectState({ controlledValue, defaultValue }: UseSelectStateParams) {
  const [internalValue, setInternalValue] = useState<string | string[] | undefined>(controlledValue ?? defaultValue);

  useEffect(() => {
    if (controlledValue !== undefined) setInternalValue(controlledValue);
  }, [controlledValue]);

  return { internalValue, setInternalValue } as const;
}
