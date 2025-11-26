import React from 'react';

const sizes: Record<string, React.CSSProperties> = {
  small: { padding: '6px 12px', fontSize: 12 },
  medium: { padding: '8px 16px', fontSize: 14 },
  large: { padding: '12px 20px', fontSize: 16 },
};

const baseStyle: React.CSSProperties = {
  border: '1px solid transparent',
  borderRadius: 4,
  cursor: 'pointer',
  display: 'inline-block',
};

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  const modeStyle: React.CSSProperties = primary
    ? { backgroundColor: backgroundColor || '#1ea7fd', color: 'white', borderColor: '#1ea7fd' }
    : { backgroundColor: backgroundColor || 'transparent', color: '#333', borderColor: '#d1d5db' };

  const style: React.CSSProperties = {
    ...baseStyle,
    ...sizes[size],
    ...modeStyle,
  };

  return (
    <button type="button" style={style} {...props}>
      {label}
    </button>
  );
};
