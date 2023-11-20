import { memo, SVGProps } from 'react';

const SafariSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 37 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.869 19.6188L17.0346 16.7843M19.869 19.6188L25.538 11.1154L17.0346 16.7843M19.869 19.6188L11.3656 25.2878L17.0346 16.7843M32.4817 18.2016C32.4817 25.9501 26.2003 32.2315 18.4518 32.2315C10.7033 32.2315 4.42188 25.9501 4.42188 18.2016C4.42188 10.4531 10.7033 4.17169 18.4518 4.17169C26.2003 4.17169 32.4817 10.4531 32.4817 18.2016Z'
      stroke='black'
      strokeWidth={1.38757}
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(SafariSvgIcon);
export { Memo as SafariSvgIcon };
