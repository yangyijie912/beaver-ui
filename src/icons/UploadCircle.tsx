import React from 'react';

export const UploadCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 16V8" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 12l4-4 4 4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.2} />
  </svg>
);

export default UploadCircle;
