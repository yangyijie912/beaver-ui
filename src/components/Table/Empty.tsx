import React from 'react';
import './Table.base.css';

type EmptyProps = {
  text?: React.ReactNode;
  className?: string;
  boxWidth?: string; // 可选内层宽度覆盖
};

const Empty: React.FC<EmptyProps> = ({ text = '暂无数据', className, boxWidth }) => {
  return (
    <div className={`beaver-table__empty-inner ${className ?? ''}`} role="status" aria-live="polite">
      <div
        className="beaver-table__empty-box"
        style={boxWidth ? { width: boxWidth } : undefined}
        aria-hidden={typeof text === 'string' ? 'false' : 'true'}
      >
        <svg
          className="beaver-table__empty-icon"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7.5L12 3l9 4.5v9L12 21 3 16.5v-9z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3v18"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
          />
        </svg>
        <div className="beaver-table__empty-text">{text}</div>
      </div>
    </div>
  );
};

export default Empty;
