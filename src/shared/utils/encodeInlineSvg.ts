import { isBrowser } from "./isBrowser";

export const encodeInlineSvg = (inlineSvg: string) =>
  `data:image/svg+xml;base64,${isBrowser() ? btoa(inlineSvg) : Buffer.from(inlineSvg).toString("base64")}`;
