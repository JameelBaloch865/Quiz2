import { memo, SVGProps } from 'react';

const PlayUseCasesSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_24_1488)'>
      <path d='M1.25 2.67468L20 13.5L1.25 24.3253V2.67468Z' stroke='black' strokeWidth={2} />
    </g>
    <defs>
      <clipPath id='clip0_24_1488'>
        <rect width={22} height={27} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(PlayUseCasesSvgIcon);
export { Memo as PlayUseCasesSvgIcon };
