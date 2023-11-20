import { memo, SVGProps } from 'react';

const SpanArrowCssSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_24_1490)'>
      <path
        d='M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20Z'
        fill='black'
      />
      <path
        d='M15.7078 9.29289C16.0983 9.68342 16.0983 10.3166 15.7078 10.7071L9.3438 17.0711C8.95327 17.4616 8.32011 17.4616 7.92958 17.0711C7.53906 16.6805 7.53906 16.0474 7.92958 15.6569L13.5864 10L7.92958 4.34315C7.53906 3.95262 7.53906 3.31946 7.92958 2.92893C8.32011 2.53841 8.95327 2.53841 9.3438 2.92893L15.7078 9.29289ZM4.58398 9H15.0007V11H4.58398V9Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_24_1490'>
        <rect width={20} height={20} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(SpanArrowCssSvgIcon);
export { Memo as SpanArrowCssSvgIcon };
