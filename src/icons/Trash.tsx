import React from 'react';

export const Trash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 7h18" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M8 7l1 12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2l1-12"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Trash;
