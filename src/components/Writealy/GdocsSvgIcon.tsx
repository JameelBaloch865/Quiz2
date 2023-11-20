import { memo, SVGProps } from 'react';

const GdocsSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M34.3459 13.7515L26.1448 5.55029M34.3459 13.7515V35.7455C34.3459 36.9808 33.3446 37.9822 32.1093 37.9822H12.3519C11.1166 37.9822 10.1152 36.9808 10.1152 35.7455V7.78697C10.1152 6.55169 11.1166 5.55029 12.3519 5.55029H26.1448M34.3459 13.7515H28.3815C27.1462 13.7515 26.1448 12.7501 26.1448 11.5148V5.55029'
      stroke='black'
      strokeWidth={1.38757}
    />
    <path d='M16.0801 18.2247H28.3818' stroke='black' strokeWidth={1.38757} />
    <path d='M16.0801 21.2071H28.3818' stroke='black' strokeWidth={1.38757} />
    <path d='M16.0801 24.1894H28.3818' stroke='black' strokeWidth={1.38757} />
    <path d='M16.0801 27.1714H22.7901' stroke='black' strokeWidth={1.38757} />
  </svg>
);

const Memo = memo(GdocsSvgIcon);
export { Memo as GdocsSvgIcon };
