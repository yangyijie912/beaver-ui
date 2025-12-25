import { useState } from 'react';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';

import Form, { FormItem } from '../index';
import Select from '../../Select/Select';

describe('FormItem controlled children', () => {
  test('does not override controlled native <select> value', () => {
    function Demo() {
      const [tag, setTag] = useState('b');

      return (
        <Form initialValues={{ tag: 'a' }}>
          <FormItem name="tag" label="Tag">
            <select aria-label="native-select" value={tag} onChange={(e) => setTag(e.target.value)}>
              <option value="a">A</option>
              <option value="b">B</option>
            </select>
          </FormItem>
        </Form>
      );
    }

    render(<Demo />);

    const el = screen.getByLabelText('native-select') as HTMLSelectElement;
    expect(el.value).toBe('b');

    fireEvent.change(el, { target: { value: 'a' } });
    expect(el.value).toBe('a');
  });

  test('does not override controlled <Select> value', () => {
    function Demo() {
      const [tag, setTag] = useState<string>('b');

      return (
        <Form initialValues={{ tag: 'a' }}>
          <FormItem name="tag" label="Tag">
            <Select
              options={[
                { label: 'A', value: 'a' },
                { label: 'B', value: 'b' },
              ]}
              value={tag}
              onChange={(v) => setTag(v as string)}
            />
          </FormItem>
        </Form>
      );
    }

    render(<Demo />);

    const trigger = screen.getByRole('button');
    expect(within(trigger).getByText('B')).toBeTruthy();
  });
});
