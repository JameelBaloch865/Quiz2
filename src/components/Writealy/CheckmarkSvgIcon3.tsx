import { memo, SVGProps } from 'react';

const CheckmarkSvgIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_24_1563)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z'
        fill='#A9F9E1'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.0023 20.2001L8.80234 16.0001L7.40234 17.4001L13.0023 23.0001L25.0023 11.0001L23.6023 9.6001L13.0023 20.2001Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_24_1563'>
        <rect width={32} height={32} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(CheckmarkSvgIcon3);
export { Memo as CheckmarkSvgIcon3 };
