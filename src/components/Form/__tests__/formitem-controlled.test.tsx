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

  test('supports native multiple <select> controlled value', () => {
    function Demo() {
      const [tags, setTags] = useState<string[]>(['b']);

      return (
        <Form initialValues={{ tags: ['a'] }}>
          <div data-testid="current">{tags.join(',')}</div>
          <FormItem name="tags" label="Tags">
            <select
              aria-label="native-multi"
              multiple
              value={tags}
              onChange={(e) => setTags(Array.from(e.target.selectedOptions, (o) => o.value))}
            >
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
          </FormItem>
        </Form>
      );
    }

    render(<Demo />);

    const current = screen.getByTestId('current');
    expect(current.textContent).toBe('b');
  });

  test('supports custom Select multiple controlled value', () => {
    function Demo() {
      const [tags, setTags] = useState<string[]>(['b']);

      return (
        <Form initialValues={{ tags: ['a'] }}>
          <FormItem name="tags" label="Tags">
            <Select
              multiple
              options={[
                { label: 'A', value: 'a' },
                { label: 'B', value: 'b' },
                { label: 'C', value: 'c' },
              ]}
              value={tags}
              onChange={(v) => setTags(v as string[])}
            />
          </FormItem>
        </Form>
      );
    }

    render(<Demo />);

    const triggers = screen.getAllByRole('button');
    const trigger = triggers.find((t) => t.getAttribute('aria-haspopup') === 'listbox');
    if (!trigger) throw new Error('Select trigger not found');
    // should render tag 'B' inside trigger
    expect(within(trigger).getByText('B')).toBeTruthy();
  });
});
