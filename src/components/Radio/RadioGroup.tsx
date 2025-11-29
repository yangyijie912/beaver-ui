import React, { useMemo } from 'react';

type RadioGroupContextType = {
  name?: string;
  value?: string | number | null;
  disabled?: boolean;
  onChange?: (value: string | number, event?: React.ChangeEvent<HTMLInputElement>) => void;
};

// 用于单选按钮组的上下文
export const RadioGroupContext = React.createContext<RadioGroupContextType | null>(null);

export type RadioGroupProps = {
  name?: string;
  /** 受控选中值 */
  value?: string | number;
  /** 非受控初始选中值 */
  defaultValue?: string | number;
  /** 是否禁用所有子单选项 */
  disabled?: boolean;
  /** 垂直排列 */
  vertical?: boolean;
  /** 选中值变化时的回调 */
  onChange?: (value: string | number, event?: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  className?: string;
};

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value: valueProp,
  defaultValue,
  disabled,
  vertical,
  onChange,
  children,
  className,
}) => {
  const [valueState, setValueState] = React.useState<string | number | null>(
    valueProp !== undefined ? valueProp : (defaultValue ?? null)
  );

  React.useEffect(() => {
    if (valueProp !== undefined) setValueState(valueProp);
  }, [valueProp]);

  const handleChange = (val: string | number, event?: React.ChangeEvent<HTMLInputElement>) => {
    if (valueProp === undefined) {
      setValueState(val);
    }
    onChange?.(val, event);
  };

  // 创建上下文值
  const ctx = useMemo(
    () => ({ name, value: valueState, disabled, onChange: handleChange }),
    [name, valueState, disabled]
  );

  const groupClass = ['beaver-radio-group', className, vertical ? 'beaver-radio-group--vertical' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <RadioGroupContext.Provider value={ctx}>
      <div role="radiogroup" className={groupClass}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
