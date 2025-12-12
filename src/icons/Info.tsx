import React from 'react';

export const Info = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.2} />
    <path d="M12 8h.01" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.5 11h1v5h-1z" fill="currentColor" />
  </svg>
);

export default Info;
