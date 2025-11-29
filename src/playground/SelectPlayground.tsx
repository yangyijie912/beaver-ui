import React from 'react';
import { createRoot } from 'react-dom/client';
import Select from '../components/Select/Select';
import '../components/Select/Select.css';
import '../tokens/tokens.css';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Citrus', value: 'citrus' },
  { label: 'Dragonfruit', value: 'dragonfruit' },
  { label: 'Elderberry', value: 'elderberry' },
  { label: 'Fig', value: 'fig' },
  { label: 'Grape', value: 'grape' },
  { label: 'Honeydew', value: 'honeydew' },
  { label: 'Iceberg', value: 'iceberg' },
  { label: 'Jackfruit', value: 'jackfruit' },
];

function App() {
  const [value, setValue] = React.useState('banana');
  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h3>Standalone Select Playground</h3>
      <p>当前值: {value}</p>
      <Select options={options} value={value} onChange={(v) => setValue(v)} placeholder="请选择" searchable />
    </div>
  );
}

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
