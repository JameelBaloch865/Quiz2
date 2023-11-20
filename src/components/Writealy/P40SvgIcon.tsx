import { memo, SVGProps } from 'react';

const P40SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 144 56'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <mask
      id='mask0_24_1382'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={17}
      y={9}
      width={110}
      height={38}
    >
      <path d='M126.4 9.77037H17.299V46.4726H126.4V9.77037Z' fill='url(#pattern0)' />
    </mask>
    <g mask='url(#mask0_24_1382)'>
      <path d='M122.531 12.0644H20.3938V46.4728H122.531V12.0644Z' fill='black' />
    </g>
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_24_1382' transform='matrix(0.000682128 0 0 0.0020277 0 -0.00692403)' />
      </pattern>
      <image
        id='image0_24_1382'
        width={1466}
        height={500}
        xlinkHref='data:image/png;base64,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'
      />
    </defs>
  </svg>
);

const Memo = memo(P40SvgIcon);
export { Memo as P40SvgIcon };
