import React from 'react';
import { EmptyBox } from '../../../icons';
import '../styles/Table.base.css';

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
        <EmptyBox className="beaver-table__empty-icon" width={48} height={48} aria-hidden />
        <div className="beaver-table__empty-text">{text}</div>
      </div>
    </div>
  );
};

export default Empty;
