import '../src/tokens/tokens.css';

// 不要在此处导入 .css.ts tokens，以避免在vanilla-extract Vite插件处理文件之前进行运行时评估
import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(backgroundColor|borderColor|textColor)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        // 按指定分组顺序排列侧边栏：操作、表单、数据展示、浮层、导航、反馈
        // 未列出的子项会在这些项之后按字母顺序显示。
        order: [
          '操作（Actions）',
          ['Button'],
          '表单（Form）',
          ['Input', 'Select', 'Checkbox', 'Radio', 'Switch', 'DatePicker', 'Upload', 'Form'],
          '数据展示（Data Display）',
          ['Table'],
          '浮层（Overlays）',
          ['Tooltip', 'Popconfirm', 'Modal', 'Drawer'],
          '导航（Navigation）',
          ['Pagination'],
          '反馈（Feedback）',
          ['Alert', 'Toast'],
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
