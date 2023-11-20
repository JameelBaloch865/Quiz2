import { memo, SVGProps } from 'react';

const FooterLogoSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 82 83' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_24_1636)'>
      <path
        d='M41 82.7297C63.6437 82.7297 82 64.3734 82 41.7297C82 19.086 63.6437 0.7297 41 0.7297C18.3563 0.7297 0 19.086 0 41.7297C0 64.3734 18.3563 82.7297 41 82.7297Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M57.8953 50.445L63.3736 27.8425H59.9879H55.755H52.417L57.8953 50.445Z'
        fill='black'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M38.9843 27.8425H35.5986L43.2172 59.2755H46.6029H50.8358H54.2215L46.6029 27.8425H43.2172H38.9843Z'
        fill='black'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M29.7845 27.8428H22.1659L22.1661 27.8434H18.7803L26.3989 59.2763H34.0175L34.0173 59.2757H37.4031L29.7845 27.8428Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_24_1636'>
        <rect width={82} height={83} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FooterLogoSvgIcon);
export { Memo as FooterLogoSvgIcon };
