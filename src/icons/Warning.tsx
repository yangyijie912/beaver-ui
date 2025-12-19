import React from 'react';

export const Warning = (props: React.SVGProps<SVGSVGElement>) => {
  const { style, ...rest } = props;
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ verticalAlign: 'middle', ...style }}
      focusable={false}
      aria-hidden={true}
      {...rest}
    >
      {/* Centered triangle with exclamation — stroke-based for consistent visibility */}
      <path
        d="M12 4.2l8.2 14H3.8L12 4.2z"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M12 9.6v4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="15.8" r="1" fill="currentColor" />
    </svg>
  );
};

export default Warning;
