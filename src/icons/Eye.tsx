import React from 'react';

export const Eye = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7z"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
  </svg>
);

export default Eye;
