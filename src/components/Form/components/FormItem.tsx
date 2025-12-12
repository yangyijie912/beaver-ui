import React, { useState, useCallback, useEffect } from 'react';
import { useFormContext } from './Form';
import type { FormItemProps } from '../types';

export const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, name, label, required, rules = [], help, colon = true, children, ...props }, ref) => {
    const form = useFormContext();
    const [touched, setTouched] = useState(false);

    // 获取当前字段的错误信息
    const error = name && form.errors[name];
    const value = name ? form.values[name] : undefined;
    const shouldShowError = touched && error;

    // 注册和注销字段的验证规则
    useEffect(() => {
      if (name && rules.length > 0) {
        form.registerField?.(name, rules);
        return () => {
          form.unregisterField?.(name);
        };
      }
    }, [name, rules.length]); // 只依赖 rules.length，而不是整个 rules 对象

    /**
     * 处理字段值变化
     * 支持原生 input/textarea/select (事件对象) 和自定义组件如 Select (直接值)
     */
    const handleChange = useCallback(
      (eventOrValue: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | any) => {
        if (name) {
          let newValue: any;

          // 检查是否为事件对象
          if (eventOrValue && typeof eventOrValue === 'object' && 'target' in eventOrValue) {
            const target = eventOrValue.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
            // 对于 checkbox，使用 checked；对于其他元素，使用 value
            newValue = 'checked' in target ? target.checked : target.value;
          } else {
            // 直接传入值（来自 Select、Checkbox 等自定义组件）
            newValue = eventOrValue;
          }

          form.setFieldValue(name, newValue);

          // 触发验证（如果规则设置为 onChange）
          const fieldRules = form.getFieldRules(name);
          const shouldValidateOnChange = fieldRules.some((rule) => rule.trigger !== 'onBlur');
          if (shouldValidateOnChange) {
            form.validateField(name);
          }
        }
      },
      [name, form]
    );

    /**
     * 处理字段失焦
     */
    const handleBlur = useCallback(
      (_e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setTouched(true);
        if (name) {
          form.validateField(name);
        }
      },
      [name, form]
    );

    // 样式类名
    const classList = ['beaver-form-item'];
    if (required) classList.push('beaver-form-item--required');
    if (shouldShowError) classList.push('beaver-form-item--error');
    if (className) classList.push(className);

    // 渲染 children，并注入必要的 props
    const renderedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const childProps = child.props as any;
        const isNativeInput = child.type === 'input' || child.type === 'textarea' || child.type === 'select';

        // 识别特殊组件（通过 displayName）
        const childDisplayName = (child.type as any)?.displayName || '';
        const isCheckbox = childDisplayName === 'Checkbox';
        const isSwitch = childDisplayName === 'Switch';
        const isDatePicker = childDisplayName === 'DatePicker';

        if (isNativeInput) {
          // 原生 HTML 元素
          return React.cloneElement(
            child as React.ReactElement<any>,
            {
              value: value !== undefined && value !== null ? String(value) : '',
              onChange: handleChange,
              onBlur: handleBlur,
              disabled: childProps.disabled || form.disabled,
            } as any
          );
        } else {
          // 自定义组件（如 Input、Select、Checkbox、Switch、DatePicker 等）
          // 自动传递 size、validation 和其他属性
          let validation: 'error' | 'success' | 'warning' | 'none' = 'none';
          if (shouldShowError) {
            validation = 'error';
          } else if (touched && !error && value) {
            // 如果已接触过且没有错误且有值，显示成功状态
            validation = 'success';
          }

          // 创建包装的 onChange，先调用 Form 的 handleChange，再调用子组件的原始 onChange
          const wrappedOnChange = (eventOrValue: any) => {
            handleChange(eventOrValue);
            // 调用子组件的原始 onChange（如果存在）
            if (childProps.onChange) {
              childProps.onChange(eventOrValue);
            }
          };

          const baseProps = {
            onChange: wrappedOnChange,
            onBlur: handleBlur,
            disabled: childProps.disabled || form.disabled,
            validation: childProps.validation || validation, // 传递验证状态给子组件
          } as any;

          // 只为支持 size 的组件传递 size（Input、Select、Button、Switch 等支持，但 Checkbox、DatePicker 不支持）
          if (!isCheckbox && !isDatePicker) {
            baseProps.size = childProps.size || form.size;
          }

          // Checkbox 和 Switch 使用 checked 属性
          if (isCheckbox || isSwitch) {
            return React.cloneElement(
              child as React.ReactElement<any>,
              {
                ...baseProps,
                checked: Boolean(value),
              } as any
            );
          }

          // DatePicker 使用 value 属性（日期字符串）
          if (isDatePicker) {
            return React.cloneElement(
              child as React.ReactElement<any>,
              {
                ...baseProps,
                value: value !== undefined && value !== null ? String(value) : undefined,
              } as any
            );
          }

          // 其他自定义组件使用 value 属性
          return React.cloneElement(
            child as React.ReactElement<any>,
            {
              ...baseProps,
              value: value !== undefined && value !== null ? String(value) : '',
            } as any
          );
        }
      }
      return child;
    });

    return (
      <div ref={ref} className={classList.join(' ')} {...props}>
        {/* 标签行 */}
        {label && (
          <label className="beaver-form-item__label">
            {required && <span className="beaver-form-item__required-mark">*</span>}
            <span>{label}</span>
            {colon && <span className="beaver-form-item__colon">:</span>}
          </label>
        )}

        {/* 输入框容器 */}
        <div className="beaver-form-item__control">{renderedChildren}</div>

        {/* 错误提示 */}
        {shouldShowError && <div className="beaver-form-item__error-message">{error}</div>}

        {/* 辅助说明 */}
        {help && !shouldShowError && <div className="beaver-form-item__help">{help}</div>}
      </div>
    );
  }
);

FormItem.displayName = 'FormItem';
