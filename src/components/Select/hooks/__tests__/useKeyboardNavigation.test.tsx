/// <reference types="vitest" />
import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import useKeyboardNavigation from '../useKeyboardNavigation';

const opts = [
  { label: 'A', value: 'a' },
  { label: 'B', value: 'b' },
  { label: 'C', value: 'c' },
];

function TestComp() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const { highlighted, onKeyDown } = useKeyboardNavigation({
    displayOptions: opts,
    open,
    setOpen,
    handleSelectByValue: (v: string) => setSelected(v),
  } as any);
  return (
    <div>
      <div data-testid="sel">{selected}</div>
      <div data-testid="h">{highlighted === null ? 'null' : String(highlighted)}</div>
      <div tabIndex={0} data-testid="target" onKeyDown={onKeyDown} />
    </div>
  );
}

describe('useKeyboardNavigation', () => {
  test('arrow keys change highlighted and enter selects', () => {
    const { getByTestId } = render(<TestComp />);
    const target = getByTestId('target');
    fireEvent.keyDown(target, { key: 'ArrowDown' });
    expect(getByTestId('h').textContent).toBe('0');
    fireEvent.keyDown(target, { key: 'ArrowDown' });
    expect(getByTestId('h').textContent).toBe('1');
    fireEvent.keyDown(target, { key: 'Enter' });
    expect(getByTestId('sel').textContent).toBe('b');
  });
});
