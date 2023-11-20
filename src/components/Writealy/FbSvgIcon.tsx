import { memo, SVGProps } from 'react';

const FbSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_24_1641)'>
      <path
        d='M3.6741 11.23V19.9775L7.32243 19.9756V11.228H10.3692L10.8261 7.81871H7.3245V5.64279C7.3245 4.65646 7.60974 3.98296 9.07734 3.98296H10.9501V0.934285C10.6256 0.894434 9.51555 0.800781 8.22158 0.800781C5.52203 0.800781 3.6741 2.38888 3.6741 5.30605V7.81871H0.621094V11.23H3.6741Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_24_1641'>
        <rect width={11} height={20} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FbSvgIcon);
export { Memo as FbSvgIcon };
