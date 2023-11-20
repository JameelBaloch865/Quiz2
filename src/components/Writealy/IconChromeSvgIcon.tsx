import { memo, SVGProps } from 'react';

const IconChromeSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22.2017 38.1583C31.0146 38.1583 38.1588 31.0141 38.1588 22.2012C38.1588 13.3883 31.0146 6.2441 22.2017 6.2441C13.3888 6.2441 6.2446 13.3883 6.2446 22.2012C6.2446 31.0141 13.3888 38.1583 22.2017 38.1583Z'
      stroke='black'
      strokeWidth={1.38757}
    />
    <path
      d='M22.2015 28.4453C25.65 28.4453 28.4456 25.6497 28.4456 22.2012C28.4456 18.7527 25.65 15.9571 22.2015 15.9571C18.753 15.9571 15.9574 18.7527 15.9574 22.2012C15.9574 25.6497 18.753 28.4453 22.2015 28.4453Z'
      stroke='black'
      strokeWidth={1.38757}
    />
    <path d='M36.7711 15.9571H22.8953' stroke='black' strokeWidth={1.38757} strokeLinecap='round' />
    <path d='M21.858 37.8725L28.2198 23.9319' stroke='black' strokeWidth={1.38757} strokeLinecap='round' />
    <path d='M9.27344 12.7422L16.651 24.9763' stroke='black' strokeWidth={1.38757} strokeLinecap='round' />
  </svg>
);

const Memo = memo(IconChromeSvgIcon);
export { Memo as IconChromeSvgIcon };
