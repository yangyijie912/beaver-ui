import { useReducer } from 'react';

export interface SelectUIState {
  open: boolean;
  query: string;
  highlighted: number | null;
  inputFocused: boolean;
}

export type SelectUIAction =
  | { type: 'SET_OPEN'; payload: boolean }
  | { type: 'TOGGLE_OPEN' }
  | { type: 'SET_QUERY'; payload: string }
  | { type: 'CLEAR_QUERY' }
  | { type: 'SET_HIGHLIGHTED'; payload: number | null }
  | { type: 'SET_INPUT_FOCUSED'; payload: boolean }
  | { type: 'RESET' };

const initialState: SelectUIState = {
  open: false,
  query: '',
  highlighted: null,
  inputFocused: false,
};

function selectUIReducer(state: SelectUIState, action: SelectUIAction): SelectUIState {
  switch (action.type) {
    case 'SET_OPEN':
      return { ...state, open: action.payload };
    case 'TOGGLE_OPEN':
      return { ...state, open: !state.open };
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'CLEAR_QUERY':
      return { ...state, query: '' };
    case 'SET_HIGHLIGHTED':
      return { ...state, highlighted: action.payload };
    case 'SET_INPUT_FOCUSED':
      return { ...state, inputFocused: action.payload };
    case 'RESET':
      return { ...initialState };
    default:
      return state;
  }
}

/**
 * 统一管理 Select 组件的 UI 状态
 * 包括：下拉打开/关闭、搜索查询、高亮项、输入框聚焦
 */
export function useSelectUI() {
  const [state, dispatch] = useReducer(selectUIReducer, initialState);

  return {
    state,
    setOpen: (open: boolean) => dispatch({ type: 'SET_OPEN', payload: open }),
    toggleOpen: () => dispatch({ type: 'TOGGLE_OPEN' }),
    setQuery: (query: string) => dispatch({ type: 'SET_QUERY', payload: query }),
    clearQuery: () => dispatch({ type: 'CLEAR_QUERY' }),
    setHighlighted: (index: number | null | ((prev: number | null) => number | null)) => {
      if (typeof index === 'function') {
        dispatch({ type: 'SET_HIGHLIGHTED', payload: index(state.highlighted) });
      } else {
        dispatch({ type: 'SET_HIGHLIGHTED', payload: index });
      }
    },
    setInputFocused: (focused: boolean) => dispatch({ type: 'SET_INPUT_FOCUSED', payload: focused }),
    reset: () => dispatch({ type: 'RESET' }),
  };
}
