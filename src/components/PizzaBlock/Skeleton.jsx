import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="131" cy="136" r="107" />
    <rect x="11" y="267" rx="15" ry="15" width="249" height="18" />
    <rect x="0" y="309" rx="8" ry="8" width="280" height="88" />
    <rect x="107" y="405" rx="14" ry="14" width="171" height="47" />
    <rect x="5" y="408" rx="14" ry="14" width="74" height="47" />
  </ContentLoader>
);

export default PizzaSkeleton;
