import React from 'react';

export const EmptyBox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 7.5L12 3l9 4.5v9L12 21 3 16.5v-9z"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 3v18"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
  </svg>
);

export default EmptyBox;
