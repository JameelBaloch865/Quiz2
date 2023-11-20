import { memo, SVGProps } from 'react';

const XMarkSvgIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_24_1554)'>
      <path
        d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z'
        fill='#E4E7ED'
      />
      <path d='M10 10L22 21.9999M22 10.0001L10 22' stroke='black' strokeWidth={2.16} />
    </g>
    <defs>
      <clipPath id='clip0_24_1554'>
        <rect width={32} height={32} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(XMarkSvgIcon2);
export { Memo as XMarkSvgIcon2 };
