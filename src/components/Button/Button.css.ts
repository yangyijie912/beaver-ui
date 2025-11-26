import { style } from '@vanilla-extract/css';
import vars from '../../tokens';

export const button = style({
  backgroundColor: vars.color.primary,
  color: 'white',
  padding: vars.space.md,
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',
});
