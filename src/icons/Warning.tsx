import React from 'react';

export const Warning = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2l9 16H3L12 2z" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 9v4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

export default Warning;
