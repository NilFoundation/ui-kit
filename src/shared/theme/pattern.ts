import { encodeInlineSvg } from "../utils/encodeInlineSvg";

// eslint-disable-next-line prettier/prettier
const svgDotsPattern = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none">
  <path fill="#212121" d="M0 0h8v8H0z"/>
  <path fill="gray" d="M6 2h2v2H6zM2 6h2v2H2z"/>
</svg>`;

export const svgInlineDotsPattern = encodeInlineSvg(svgDotsPattern);
