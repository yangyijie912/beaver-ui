import React, { createContext, useContext, useState, useCallback } from 'react';
import type { FormContextType, FormProps, FieldValue, FieldError, ValidationRule } from '../types';

/** Form 上下文 */
export const FormContext = createContext<FormContextType | undefined>(undefined);

/**
 * 获取 Form 上下文的 Hook
 */
export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext 必须在 Form 内部使用');
  }
  return context;
};

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (
    {
      className,
      initialValues = {},
      onSubmit,
      layout = 'vertical',
      labelWidth,
      disabled = false,
      size = 'medium',
      children,
      ...props
    },
    ref
  ) => {
    // 表单数据状态
    const [values, setValues] = useState<FieldValue>(initialValues);
    // 表单错误状态
    const [errors, setErrors] = useState<FieldError>({});
    // 字段验证规则映射表，value 包含 rules 与字段元信息（如 disabled）
    const [fieldRules, setFieldRules] = useState<Map<string, { rules: ValidationRule[]; disabled?: boolean }>>(
      new Map()
    );
    // 是否已尝试提交表单（用于在提交后展示未触碰字段的错误提示）
    const [submitAttempted, setSubmitAttempted] = useState(false);

    /**
     * 更新单个字段的值
     */
    const setFieldValue = useCallback((name: string, value: any) => {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }, []);

    /**
     * 设置字段的错误信息
     */
    const setFieldError = useCallback((name: string, error: string | undefined) => {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }, []);

    /**
     * 获取字段的验证规则
     */
    const getFieldRules = useCallback(
      (name: string): ValidationRule[] => {
        const meta = fieldRules.get(name);
        return meta ? meta.rules : [];
      },
      [fieldRules]
    );

    /**
     * 验证单个字段
     * 返回 Promise，true 表示验证通过，false 表示验证失败
     */
    const validateField = useCallback(
      async (name: string): Promise<boolean> => {
        const meta = fieldRules.get(name);
        const rules = meta ? meta.rules : [];
        const value = values[name];

        // 如果没有规则，则验证通过
        if (rules.length === 0) {
          setFieldError(name, undefined);
          return true;
        }

        // 如果字段处于 disabled，并且没有任何规则声明 validateWhenDisabled，则直接通过
        const isDisabled = Boolean(meta?.disabled);
        if (isDisabled) {
          const rulesForce = rules.filter((r) => r.validateWhenDisabled);
          if (rulesForce.length === 0) {
            setFieldError(name, undefined);
            return true;
          }
          // 否则仅对那些带有 validateWhenDisabled 的规则执行校验
        }

        const rulesToCheck = isDisabled ? rules.filter((r) => r.validateWhenDisabled) : rules;

        // 依次执行规则，找到第一个验证失败的规则
        for (const rule of rulesToCheck) {
          const maybe = rule.validate(value);
          const error = maybe instanceof Promise ? await maybe : maybe;
          if (error) {
            setFieldError(name, error);
            return false;
          }
        }

        // 所有规则都通过
        setFieldError(name, undefined);
        return true;
      },
      [values, getFieldRules, setFieldError, fieldRules]
    );

    /**
     * 验证整个表单
     * 返回 Promise，true 表示所有字段验证通过，false 表示至少有一个字段验证失败
     */
    const validateForm = useCallback(async (): Promise<boolean> => {
      // validateField 会自行跳过 disabled 的字段（除非规则声明了 validateWhenDisabled）
      const fieldsToValidate = Array.from(fieldRules.keys());
      const results = await Promise.all(fieldsToValidate.map((name) => validateField(name)));
      return results.every((result) => result);
    }, [fieldRules, validateField]);

    /**
     * 处理表单提交
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // 标记为已尝试提交，以便显示所有字段的错误提示
      setSubmitAttempted(true);

      // 验证整个表单
      const isValid = await validateForm();
      if (!isValid) {
        return;
      }

      // 执行提交回调
      if (onSubmit) {
        try {
          await onSubmit(values);
        } catch (err) {
          console.error('表单提交失败:', err);
        }
      }
    };

    /**
     * 注册字段的验证规则
     */
    const registerField = useCallback((name: string, rules: ValidationRule[], meta?: { disabled?: boolean }) => {
      setFieldRules((prev) => {
        const newMap = new Map(prev);
        newMap.set(name, { rules, disabled: meta?.disabled });
        return newMap;
      });
    }, []);

    /**
     * 取消注册字段的验证规则
     */
    const unregisterField = useCallback((name: string) => {
      setFieldRules((prev) => {
        const newMap = new Map(prev);
        newMap.delete(name);
        return newMap;
      });
    }, []);

    /**
     * 外部通过 ref 调用的方法
     */
    const formInstance = {
      /** 获取表单的所有字段值 */
      getValues: () => values,
      /** 设置表单的字段值 */
      setValues: (newValues: FieldValue) => {
        setValues((prev) => ({ ...prev, ...newValues }));
      },
      /** 验证整个表单 */
      validate: validateForm,
      /** 重置表单为初始值 */
      reset: () => {
        setValues(initialValues);
        setErrors({});
        setSubmitAttempted(false);
      },
      /** 清空表单 */
      clear: () => {
        const cleared: FieldValue = {};
        Object.keys(values).forEach((key) => {
          cleared[key] = '';
        });
        setValues(cleared);
        setErrors({});
        setSubmitAttempted(false);
      },
    };

    // 暴露 formInstance 到 ref 对象
    React.useImperativeHandle(ref, () => formInstance as any);

    // 样式类名列表
    const classList = ['beaver-form'];
    if (layout) classList.push(`beaver-form--${layout}`);
    if (disabled) classList.push('beaver-form--disabled');
    if (size) classList.push(`beaver-form--${size}`);
    if (className) classList.push(className);

    // CSS 变量，用于设置标签宽度和其他配置
    const style: React.CSSProperties = {
      ...(labelWidth !== undefined
        ? {
            '--beaver-form-label-width': typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth,
          }
        : {}),
    } as React.CSSProperties;

    return (
      <FormContext.Provider
        value={{
          values,
          errors,
          submitAttempted,
          setFieldValue,
          validateField,
          setFieldError,
          getFieldRules,
          disabled,
          size,
          registerField,
          unregisterField,
          layout,
        }}
      >
        <form ref={ref} className={classList.join(' ')} style={style} onSubmit={handleSubmit} noValidate {...props}>
          {children}
        </form>
      </FormContext.Provider>
    );
  }
);

Form.displayName = 'Form';

export default Form;
