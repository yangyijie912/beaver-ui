import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = {
  color: {
    primary: '#0ea5e9',
    text: '#111827',
  },
  space: {
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
};

createGlobalTheme(':root', {
  color: vars.color,
  space: vars.space,
});

export default vars;
