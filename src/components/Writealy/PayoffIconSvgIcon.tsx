import { memo, SVGProps } from 'react';

const PayoffIconSvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M17.9844 26.7363V15.497M17.9844 11.7506V8.00415' stroke='black' strokeWidth={2.49762} />
    <path
      d='M22.9769 27.0784L26.4312 16.3831M27.5826 12.818L28.734 9.25288M12.9877 27.0784L9.53338 16.3831M8.38196 12.818L7.23053 9.25293'
      stroke='black'
      strokeWidth={2.49762}
    />
    <path d='M27.9771 28.9924C30.1614 25.1853 31.386 23.0508 33.5703 19.2437' stroke='black' strokeWidth={2.49762} />
    <path d='M8.59322 28.9924C6.40893 25.1853 5.18429 23.0508 3 19.2437' stroke='black' strokeWidth={2.49762} />
  </svg>
);

const Memo = memo(PayoffIconSvgIcon);
export { Memo as PayoffIconSvgIcon };
