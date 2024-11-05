import { memo, SVGProps } from 'react';

const GroupIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.19934 0.700099C2.80459 0.700099 0.0427799 3.46191 0.0427799 6.85662C0.0427799 11.0696 5.55229 17.2544 5.78687 17.5156C6.0072 17.761 6.39187 17.7606 6.6118 17.5156C6.84638 17.2544 12.3559 11.0696 12.3559 6.85662C12.3558 3.46191 9.59405 0.700099 6.19934 0.700099ZM6.19934 9.95414C4.49136 9.95414 3.10185 8.5646 3.10185 6.85662C3.10185 5.14864 4.49139 3.75914 6.19934 3.75914C7.90728 3.75914 9.29679 5.14868 9.29679 6.85666C9.29679 8.56463 7.90728 9.95414 6.19934 9.95414Z'
      fill='#035AAB'
    />
  </svg>
);

const Memo = memo(GroupIcon6);
export { Memo as GroupIcon6 };