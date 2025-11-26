import { style } from '@vanilla-extract/css';
import vars from '../../tokens';

export const input = style({
  padding: vars.space.md,
  border: '1px solid #d1d5db',
  borderRadius: 6,
  color: vars.color.text,
  outline: 'none',
});
