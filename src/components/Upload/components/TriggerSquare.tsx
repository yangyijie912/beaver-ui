import React from 'react';
import { UploadCircle } from '../../../icons';

type TriggerSquareProps = {
  onClick?: () => void;
};

const TriggerSquare: React.FC<TriggerSquareProps> = ({ onClick }) => {
  return (
    <div className="beaver-upload__thumb">
      <div
        className="beaver-upload__thumb-inner beaver-upload__area--square"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.();
          }
        }}
        aria-label="上传"
      >
        <UploadCircle width={32} height={32} style={{ color: '#999', opacity: 0.6 }} aria-hidden />
      </div>
    </div>
  );
};

export default TriggerSquare;
