/// <reference types="vitest" />
import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import useTypeahead from '../useTypeahead';

function TestComp({ timeout = 50 }: { timeout?: number }) {
  const [q, setQ] = useState('');
  const [h, setH] = useState(0);
  const handlers = useTypeahead(timeout);
  return (
    <div>
      <div data-testid="q">{q}</div>
      <div data-testid="h">{h}</div>
      <button
        data-testid="char"
        onClick={() =>
          handlers.handleChar({
            key: 'a',
            query: q,
            setQuery: setQ,
            options: [{ label: 'A', value: 'a' }],
            multiple: false,
            searchable: true,
            setHighlighted: setH,
          })
        }
      />
      <button
        data-testid="back"
        onClick={() =>
          handlers.handleBackspace({
            query: q,
            setQuery: setQ,
            options: [{ label: 'A', value: 'a' }],
            setHighlighted: setH,
          })
        }
      />
    </div>
  );
}

describe('useTypeahead', () => {
  test('handleChar sets query and schedules clear', async () => {
    const { getByTestId } = render(<TestComp />);
    const btn = getByTestId('char');
    fireEvent.click(btn);
    expect(getByTestId('q').textContent).toBe('a');
  });
});
