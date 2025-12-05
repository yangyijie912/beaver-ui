import '../src/tokens/tokens.css';

// 不要在此处导入 .css.ts tokens，以避免在vanilla-extract Vite插件处理文件之前进行运行时评估
import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        // 首先按组（例如 `Components`) 排序，然后按下面的数组顺序排列该组下的子页面。
        // 未列出的项会在这些项之后按字母顺序显示。
        order: [
          'Components',
          ['Button', 'Checkbox', 'Radio', 'Switch', 'Input', 'Select', 'Pagination', 'Table', 'Modal'],
        ],
      },
    },

    a11y: {
      // 'todo' - 仅在测试 UI 中显示 a11y 违规
      // 'error' - 在 CI 上因 a11y 违规而失败
      // 'off' - 完全跳过 a11y 检查
      test: 'todo',
    },
  },
};

export default preview;
