import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Upload from './Upload';

/**
 * Upload 组件
 * - 使用场景：用于文件上传功能
 * - 支持单文件和多文件上传
 * - 支持拖拽上传
 * - 支持文件验证（大小、类型等）
 * - 支持自定义上传端点和上传函数
 * - 显示上传进度和文件列表
 */
const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,
  tags: ['autodocs'],
  argTypes: {
    action: {
      control: 'text',
      description: '上传的 URL 端点',
    },
    multiple: {
      control: 'boolean',
      description: '是否支持多个文件上传',
    },
    accept: {
      control: 'text',
      description: '接受的文件类型（如 "image/*", ".pdf" 等）',
    },
    showFileList: {
      control: 'boolean',
      description: '是否显示已上传文件列表',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用上传',
    },
    autoUpload: {
      control: 'boolean',
      description: '是否自动上传文件',
    },
    drag: {
      control: 'boolean',
      description: '是否启用拖拽上传',
    },
    maxCount: {
      control: 'number',
      description: '最大上传文件数',
    },
    maxSize: {
      control: 'number',
      description: '最大文件大小（字节）',
    },
  },
  // 默认参数
  args: {
    defaultFileList: [
      {
        uid: 'demo-1',
        name: 'landscape.png',
        status: 'success',
        response: { url: 'https://picsum.photos/300/300' },
      },
      {
        uid: 'demo-2',
        name: 'avatar.jpg',
        status: 'uploading',
        percent: 48,
        response: { url: 'https://picsum.photos/300/300' },
      },
      {
        uid: 'avatar-1',
        name: 'report.pdf',
        status: 'success',
        response: { url: '' },
      },
      {
        uid: 'avatar-2',
        name: 'notes.txt',
        status: 'error',
        error: '上传失败',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Upload>;
type UploadArgs = Omit<React.ComponentProps<typeof Upload>, 'ref'>;

/**
 * 基础上传示例
 */
export const Basic: Story = {
  name: '基础上传',
  args: {
    action: '/api/upload',
    dragText: '拖拽文件到此处，或点击选择文件',
    buttonText: '选择文件',
  },
};

/**
 * 单文件上传
 */
export const SingleFile: Story = {
  name: '单文件上传',
  args: {
    action: '/api/upload',
    multiple: false,
    dragText: '拖拽文件到此处上传',
    buttonText: '选择单个文件',
  },
};

/**
 * 禁用状态
 */
export const Disabled: Story = {
  name: '禁用状态',
  args: {
    disabled: true,
    dragText: '上传已禁用',
    buttonText: '上传（已禁用）',
  },
};

/**
 * 隐藏文件列表
 */
export const HideFileList: Story = {
  name: '隐藏文件列表',
  args: {
    action: '/api/upload',
    showFileList: false,
    dragText: '拖拽文件到此处',
  },
};

/**
 * 限制文件类型
 */
export const LimitFileType: Story = {
  name: '限制文件类型',
  args: {
    action: '/api/upload',
    accept: 'image/*',
    dragText: '只支持图片文件',
    buttonText: '选择图片',
  },
};

/**
 * 限制文件大小
 */
export const LimitFileSize: Story = {
  name: '限制文件大小',
  args: {
    action: '/api/upload',
    maxSize: 1024 * 1024, // 1MB
    sizeLimitMessage: '文件大小不超过 1MB',
    dragText: '拖拽文件到此处（最大 1MB）',
  },
};

/**
 * 限制文件数量
 */
export const LimitFileCount: Story = {
  name: '限制文件数量',
  args: {
    action: '/api/upload',
    maxCount: 3,
    dragText: '最多上传 3 个文件',
    buttonText: '选择文件',
  },
};

/**
 * 手动上传
 */
export const ManualUpload: Story = {
  name: '手动上传',
  render: (args: UploadArgs) => {
    const [files, setFiles] = React.useState<any[]>([]);

    const handleUpload = () => {
      console.log('手动上传', files);
    };

    return (
      <div>
        <Upload {...args} autoUpload={false} onChange={(uploadFiles) => setFiles(uploadFiles)} />
        <button onClick={handleUpload} style={{ marginTop: '12px', padding: '8px 16px', cursor: 'pointer' }}>
          提交上传
        </button>
      </div>
    );
  },
  args: {
    dragText: '拖拽文件到此处，点击"提交上传"按钮手动上传',
  },
};

/**
 * 自定义上传函数
 */
export const CustomUpload: Story = {
  name: '自定义上传函数',
  render: (args: UploadArgs) => {
    const customRequest = async (file: File) => {
      // 模拟上传延迟
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('自定义上传完成:', file.name);
          resolve({ success: true, filename: file.name });
        }, 2000);
      });
    };

    return <Upload {...args} customRequest={customRequest} />;
  },
  args: {
    dragText: '使用自定义上传函数',
    buttonText: '选择文件',
  },
};

/**
 * 无拖拽功能
 */
export const NoDrag: Story = {
  name: '无拖拽功能',
  args: {
    action: '/api/upload',
    drag: false,
    dragText: '点击下方按钮选择文件',
    buttonText: '点击选择文件',
  },
};

/**
 * 带回调事件
 */
export const WithCallbacks: Story = {
  name: '带回调事件',
  render: (args: UploadArgs) => {
    const handleBeforeUpload = (file: File) => {
      console.log('上传前钩子:', file.name);
      return true;
    };

    const handleSuccess = (response: any, file: any) => {
      console.log('上传成功:', file.name, response);
    };

    const handleError = (error: Error, file: any) => {
      console.log('上传失败:', file.name, error.message);
    };

    const handleProgress = (event: ProgressEvent, file: any) => {
      const percent = Math.round((event.loaded / event.total) * 100);
      console.log(`${file.name} 上传进度: ${percent}%`);
    };

    const handleRemove = (file: any) => {
      console.log('已移除:', file.name);
    };

    return (
      <Upload
        {...args}
        beforeUpload={handleBeforeUpload}
        onSuccess={handleSuccess}
        onError={handleError}
        onProgress={handleProgress}
        onRemove={handleRemove}
      />
    );
  },
  args: {
    action: '/api/upload',
    dragText: '拖拽文件到此处',
    buttonText: '选择文件',
  },
};

/**
 * 完整示例
 */
export const Complete: Story = {
  name: '完整示例',
  render: (args: UploadArgs) => {
    const [uploadedFiles, setUploadedFiles] = React.useState<any[]>([]);

    return (
      <div style={{ padding: '20px', maxWidth: '600px' }}>
        <h3>文件上传示例</h3>
        <Upload
          {...args}
          maxCount={5}
          maxSize={5 * 1024 * 1024} // 5MB
          accept="image/*,.pdf,.doc,.docx"
          onChange={(files) => {
            console.log('文件列表变化:', files);
            setUploadedFiles(files);
          }}
        />
        <div style={{ marginTop: '20px' }}>
          <h4>已上传文件统计</h4>
          <p>总数: {uploadedFiles.length}</p>
          <p>成功: {uploadedFiles.filter((f) => f.status === 'success').length}</p>
          <p>失败: {uploadedFiles.filter((f) => f.status === 'error').length}</p>
          <p>上传中: {uploadedFiles.filter((f) => f.status === 'uploading').length}</p>
        </div>
      </div>
    );
  },
  args: {
    action: '/api/upload',
    dragText: '拖拽文件到此处，或点击选择文件（最多 5 个，每个不超过 5MB）',
    buttonText: '选择文件',
  },
};

/**
 * 自定义触发（children 插槽）
 */
export const CustomTrigger: Story = {
  name: '自定义触发（children）',
  render: (args: UploadArgs) => (
    <div style={{ width: 320 }}>
      <Upload {...args}>
        <button type="button">一个新的上传</button>
      </Upload>
    </div>
  ),
  args: {
    action: '/api/upload',
  },
};

/**
 * 函数式插槽 renderTrigger 示例
 */
export const RenderTrigger: Story = {
  name: '函数式插槽（renderTrigger）',
  render: (args: UploadArgs) => (
    <div style={{ width: 320 }}>
      <Upload
        {...args}
        renderTrigger={({ open }) => (
          <a onClick={open} style={{ cursor: 'pointer', color: '#0eaae0' }}>
            自定义触发（renderTrigger）
          </a>
        )}
      />
    </div>
  ),
};

/**
 * 简易按钮风格（默认）
 * - 在外层容器设置宽度可以限制文件展示区域宽度
 */
export const DefaultButton: Story = {
  name: '简易按钮风格',
  render: (args: UploadArgs) => (
    <div style={{ width: 500 }}>
      <Upload {...args} />
    </div>
  ),
  args: {
    buttonText: '选择文件',
  },
};

/**
 * 拖拽风格
 */
export const DragStyle: Story = {
  name: '拖拽风格',
  render: (args: UploadArgs) => (
    <div style={{ width: 500 }}>
      <Upload {...args} variant="drag" />
    </div>
  ),
  args: {
    dragText: '拖拽文件到此处，或点击选择文件',
    buttonText: '选择文件',
  },
};

/**
 * 头像风格
 */
export const AvatarStyle: Story = {
  name: '头像风格',
  render: (args: UploadArgs) => (
    <div>
      <Upload {...args} variant="avatar" />
    </div>
  ),
};

/**
 * 简易按钮风格（默认） + 图片展示
 */
export const DefaultButtonWithPicture: Story = {
  name: '简易按钮风格+图片展示',
  render: (args: UploadArgs) => (
    <div style={{ width: 500 }}>
      <Upload {...args} listType="picture" />
    </div>
  ),
  args: {
    buttonText: '选择文件',
  },
};

/**
 * 拖拽风格 + 图片展示
 */
export const DragStyleWithPicture: Story = {
  name: '拖拽风格+图片展示',
  render: (args: UploadArgs) => (
    <div style={{ width: 500 }}>
      <Upload {...args} variant="drag" listType="picture" />
    </div>
  ),
  args: {
    dragText: '拖拽文件到此处，或点击选择文件',
    buttonText: '选择文件',
  },
};

/**
 * 头像风格 + 列表展示
 */
export const AvatarStyleWithList: Story = {
  name: '头像风格+列表展示',
  render: (args: UploadArgs) => (
    <div>
      <Upload {...args} variant="avatar" listType="list" />
    </div>
  ),
};
