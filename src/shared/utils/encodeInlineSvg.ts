export const encodeInlineSvg = (inlineSvg: string) => `data:image/svg+xml,${encodeURIComponent(inlineSvg)}`;
