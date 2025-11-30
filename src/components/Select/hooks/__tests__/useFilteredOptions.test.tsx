/// <reference types="vitest" />
import React from 'react';
import { render, screen } from '@testing-library/react';
import useFilteredOptions from '../useFilteredOptions';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Apricot', value: 'apricot' },
];

function TestComp(props: any) {
  const { filteredOptions, displayOptions } = useFilteredOptions(props);
  return (
    <div>
      <div data-testid="filtered">{filteredOptions.map((o) => o.label).join(',')}</div>
      <div data-testid="display">{displayOptions.map((o) => o.label).join(',')}</div>
    </div>
  );
}

describe('useFilteredOptions', () => {
  test('filters by label when userTyped and searchBy label', () => {
    render(<TestComp options={options} query={'ap'} userTyped={true} searchBy="label" />);
    expect(screen.getByTestId('filtered').textContent).toContain('Apple');
    expect(screen.getByTestId('filtered').textContent).toContain('Apricot');
  });

  test('returns allowCreate new option when no matches', () => {
    render(<TestComp options={[]} query={'pear'} userTyped={true} allowCreate={true} />);
    expect(screen.getByTestId('display').textContent).toBe('pear');
  });
});
