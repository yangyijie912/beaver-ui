import React, { useState, useCallback, useEffect } from 'react';
import { useFormContext } from './Form';
import type { FormItemProps } from '../types';

export const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, name, label, required, rules = [], help, colon = true, children, disabled, ...props }, ref) => {
    const form = useFormContext();
    const [touched, setTouched] = useState(false);

    // 获取当前字段的错误信息
    const error = name && form.errors[name];
    const value = name ? form.values[name] : undefined;
    // 当字段已被触碰或表单已尝试提交（submitAttempted）时，若存在错误则显示
    const shouldShowError = (touched || Boolean(form.submitAttempted)) && error;

    // 计算子组件上是否声明了 disabled（例如 <Input disabled />）
    const childHasDisabled = React.Children.toArray(children).some((child) => {
      return React.isValidElement(child) && (child.props as any)?.disabled;
    });

    // 计算最终要注册的规则：
    // - 如果用户传入了自定义 rules，则以用户 rules 为准
    // - 如果没有传入 rules 且 required 为 true，则注入一个默认的必填校验
    const effectiveRules = React.useMemo(() => {
      // 计算可读的字段名：优先使用 label（当为 string/number 时），否则回退到 name
      const fieldLabelText =
        label && (typeof label === 'string' || typeof label === 'number')
          ? String(label)
          : name
            ? String(name)
            : '该字段';

      // 默认必填校验，提示中包含字段名
      const requiredRule = {
        validate: (value: any) => {
          const isEmpty =
            value === undefined ||
            value === null ||
            (typeof value === 'string' && value.trim() === '') ||
            (Array.isArray(value) && value.length === 0);
          return isEmpty ? `${fieldLabelText}不能为空` : undefined;
        },
        // 标记此规则为框架注入的必填规则，供表单验证器识别并按优先级处理
        __isRequired: true,
      } as any;

      // 如果不需要必填，则直接返回用户规则
      if (!required) return rules;

      // 如果用户提供了 rules，则把默认必填规则放在前面（先做非空校验），
      // 但后续用户规则可以决定是否覆盖必填校验
      if (rules && rules.length > 0) {
        return [requiredRule, ...rules];
      }

      // 没有用户规则但设置了 required，使用默认必填规则
      return [requiredRule];
    }, [rules, required, label, name]);

    // 在卸载时取消注册字段
    useEffect(() => {
      return () => {
        if (name) form.unregisterField?.(name);
      };
      // 在 name 改变或组件卸载时运行清理
    }, [name, form.unregisterField]);

    // 在 rules / disabled 等元信息变化时注册或更新字段，
    // 注意不要先注销再注册，避免触发先删除后添加导致的中间状态并发渲染循环。
    useEffect(() => {
      if (name && effectiveRules.length > 0) {
        const isDisabled = Boolean(childHasDisabled || disabled || form.disabled);
        form.registerField?.(name, effectiveRules, { disabled: isDisabled });
      }
      // 依赖包含所有会影响 registration 的值
    }, [name, effectiveRules, childHasDisabled, disabled, form.disabled, form.registerField]);

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
            // 对于 checkbox/radio，需要使用 checked。注意：直接用 'checked' in target 会在所有 input 上为 true（属性存在），
            // 因此应基于 element 类型判断（只能在真正的 checkbox/radio 上使用 checked）。
            const isCheckboxLike =
              (target as HTMLInputElement).tagName === 'INPUT' &&
              ((target as HTMLInputElement).type === 'checkbox' || (target as HTMLInputElement).type === 'radio');
            if (isCheckboxLike) {
              newValue = (target as HTMLInputElement).checked;
            } else {
              newValue = (target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).value;
            }
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
          // 原生 HTML 元素：保留原始 childProps（例如 style）并覆盖需要的属性
          return React.cloneElement(
            child as React.ReactElement<any>,
            {
              ...childProps,
              value: value !== undefined && value !== null ? String(value) : '',
              onChange: handleChange,
              onBlur: handleBlur,
              disabled: childProps.disabled || disabled || form.disabled,
            } as any
          );
        } else {
          // 自定义组件（如 Input、Select、Checkbox、Switch、DatePicker 等）
          // 如果用户在 child.props.style 中传入了 width，把它也传给组件的 `width` prop，
          // 这样像 Select 这种支持 `width` prop 的组件能正确应用宽度。
          // 自动传递 size、validation 和其他属性
          let validation: 'error' | 'success' | 'warning' | 'none' = 'none';
          const incomingStyle = childProps.style as React.CSSProperties | undefined;
          const incomingWidth = incomingStyle?.width;
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
            disabled: childProps.disabled || disabled || form.disabled,
            validation: childProps.validation || validation, // 传递验证状态给子组件
            // 把 style.width 映射到 width prop（仅在子组件未显式设置 width 时使用）
            ...(incomingWidth !== undefined && childProps.width === undefined ? { width: incomingWidth } : {}),
          } as any;

          // 只为支持 size 的组件传递 size（Input、Select、Button、Switch 等支持，但 Checkbox、DatePicker 不支持）
          if (!isCheckbox && !isDatePicker) {
            baseProps.size = childProps.size || form.size;
          }

          // Checkbox 和 Switch 使用 checked 属性，保留 childProps
          if (isCheckbox || isSwitch) {
            return React.cloneElement(
              child as React.ReactElement<any>,
              {
                ...childProps,
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
                ...childProps,
                ...baseProps,
                value: value !== undefined && value !== null ? value : undefined,
              } as any
            );
          }

          // 其他自定义组件使用 value 属性
          return React.cloneElement(
            child as React.ReactElement<any>,
            {
              ...childProps,
              ...baseProps,
              value: value !== undefined && value !== null ? value : '',
            } as any
          );
        }
      }
      return child;
    });

    const isInline = form.layout === 'inline';

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

        {/* 行内布局时：把错误/帮助移到与 label 同级，使其成为独立的弹性子项 */}
        {isInline ? (
          <>
            <div className="beaver-form-item__control">{renderedChildren}</div>
            <div className="beaver-form-item__error-message">{shouldShowError ? error : ''}</div>
            <div className="beaver-form-item__help">{help && !shouldShowError ? help : ''}</div>
          </>
        ) : (
          /* 其他布局（vertical/horizontal）：保留原来的结构 */
          <div className="beaver-form-item__control">
            {renderedChildren}
            <div className="beaver-form-item__error-message">{shouldShowError ? error : ''}</div>
            <div className="beaver-form-item__help">{help && !shouldShowError ? help : ''}</div>
          </div>
        )}
      </div>
    );
  }
);

FormItem.displayName = 'FormItem';
