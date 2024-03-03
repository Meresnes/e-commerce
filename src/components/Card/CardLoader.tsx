import React from "react";

import ContentLoader from "react-content-loader";

export const CardLoader = () => (
  <ContentLoader
    speed={2}
    width={330}
    height={450}
    viewBox="0 0 330 450"
    backgroundColor="#d3cfcf"
    foregroundColor="#776e6e"
  >
    <rect x="0" y="245" rx="2" ry="2" width="250" height="50" />
    <rect x="0" y="0" rx="2" ry="2" width="400" height="200" />
    <rect x="0" y="326" rx="2" ry="2" width="250" height="25" />
    <rect x="0" y="417" rx="2" ry="2" width="100" height="25" />
  </ContentLoader>
);
