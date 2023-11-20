import { memo, SVGProps } from 'react';

const WebArrowInsideSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_24_1102)'>
      <path
        d='M29.9439 15.7502C30.6158 15.0781 30.6158 13.9885 29.9439 13.3164L18.9925 2.36518C18.3204 1.69315 17.2309 1.69315 16.5589 2.36518C15.8868 3.03721 15.8868 4.12677 16.5589 4.7988L26.2934 14.5333L16.5589 24.2678C15.8868 24.9399 15.8868 26.0294 16.5589 26.7014C17.2309 27.3735 18.3204 27.3735 18.9925 26.7014L29.9439 15.7502ZM0.0464516 16.2541H28.727V12.8125H0.0464522L0.0464516 16.2541Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_24_1102'>
        <rect width={30.975} height={27.5333} fill='white' transform='translate(0.0456867 0.766689)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(WebArrowInsideSvgIcon);
export { Memo as WebArrowInsideSvgIcon };
