import { memo, SVGProps } from 'react';

const FooterLogoSvgIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 67 68' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_24_1647)'>
      <path
        d='M33.2646 67.1196C51.6357 67.1196 66.5284 52.2269 66.5284 33.8558C66.5284 15.4847 51.6357 0.592022 33.2646 0.592022C14.8935 0.592022 0.000785453 15.4847 0.000785453 33.8558C0.000785453 52.2269 14.8935 67.1196 33.2646 67.1196Z'
        fill='#EB7A65'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M46.9728 40.9266L51.4174 22.589H48.6705H45.2363H42.5282L46.9728 40.9266Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M31.6295 22.589H28.8826L35.0637 48.0909H37.8105H41.2447H43.9916L37.8105 22.589H35.0637H31.6295Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M24.1649 22.5892H17.9839L17.984 22.5897H15.2371L21.4181 48.0916H27.5992L27.599 48.0911H30.346L24.1649 22.5892Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_24_1647'>
        <rect width={66.5276} height={67.3389} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(FooterLogoSvgIcon2);
export { Memo as FooterLogoSvgIcon2 };
