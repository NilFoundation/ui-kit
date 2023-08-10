// eslint-disable-next-line prettier/prettier
const svgDotsPattern =
`<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="8" height="8" fill="#212121"/>
  <rect x="6" y="2" width="2" height="2" fill="#808080"/>
  <rect x="2" y="6" width="2" height="2" fill="#808080"/>
</svg>`;

export const svgInlineDotsPattern = `data:image/svg+xml;base64,${btoa(svgDotsPattern)}`;
