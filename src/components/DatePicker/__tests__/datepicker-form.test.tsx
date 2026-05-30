import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import DatePicker from '../DatePicker';
import Form, { FormItem } from '../../Form';

describe('DatePicker with FormItem', () => {
  test('does not show required validation for an initial month value when opening the picker', async () => {
    render(
      <Form initialValues={{ startTime: new Date(2020, 8, 1) }}>
        <FormItem name="startTime" label="开始时间" required>
          <DatePicker picker="month" format="YYYY-MM" placeholder="2020-09" />
        </FormItem>
        <button type="submit">提交</button>
      </Form>
    );

    const input = screen.getByPlaceholderText('2020-09');
    fireEvent.focus(input);
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.queryByText('开始时间不能为空')).toBeNull();
    });
  });

  test('does not validate while focus moves from input into the date panel', async () => {
    render(
      <Form>
        <FormItem name="startTime" label="开始时间" required>
          <DatePicker picker="month" format="YYYY-MM" placeholder="2020-09" />
        </FormItem>
      </Form>
    );

    const input = screen.getByPlaceholderText('2020-09');
    fireEvent.focus(input);

    const monthButton = await screen.findByRole('button', { name: '1月' });
    fireEvent.mouseDown(monthButton);
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.queryByText('开始时间不能为空')).toBeNull();
    });
  });

  test('commits typed month value and clears required validation on blur', async () => {
    const handleSubmit = vi.fn();

    render(
      <Form onSubmit={handleSubmit}>
        <FormItem name="startTime" label="开始时间" required>
          <DatePicker picker="month" format="YYYY-MM" placeholder="2020-09" />
        </FormItem>
        <button type="submit">提交</button>
      </Form>
    );

    fireEvent.click(screen.getByRole('button', { name: '提交' }));
    expect(await screen.findByText('开始时间不能为空')).toBeTruthy();

    const input = screen.getByPlaceholderText('2020-09');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '2026-02' } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.queryByText('开始时间不能为空')).toBeNull();
    });

    fireEvent.click(screen.getByRole('button', { name: '提交' }));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
