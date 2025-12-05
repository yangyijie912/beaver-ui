/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import useSelectState from '../useSelectState';

function TestComp({ controlledValue }: { controlledValue?: string | string[] }) {
  const { internalValue } = useSelectState({ controlledValue });
  return <div data-testid="val">{Array.isArray(internalValue) ? internalValue.join(',') : String(internalValue)}</div>;
}

describe('useSelectState', () => {
  test('uses controlled value when provided', () => {
    const { rerender } = render(<TestComp controlledValue={undefined} />);
    expect(screen.getByTestId('val').textContent).toBe('undefined');
    rerender(<TestComp controlledValue={'a'} />);
    expect(screen.getByTestId('val').textContent).toBe('a');
    rerender(<TestComp controlledValue={['x', 'y']} />);
    expect(screen.getByTestId('val').textContent).toBe('x,y');
  });
});
