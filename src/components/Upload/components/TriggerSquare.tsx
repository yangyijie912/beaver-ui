import React from 'react';

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
        <svg viewBox="0 0 24 24" width="32" height="32" style={{ color: '#999', opacity: 0.6 }} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
          />
        </svg>
      </div>
    </div>
  );
};

export default TriggerSquare;
