import * as React from 'react';
import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180  "
    viewBox="0 0 6 10"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 1 1 5l4 4"
    />
  </svg>
);
export default SvgComponent;
