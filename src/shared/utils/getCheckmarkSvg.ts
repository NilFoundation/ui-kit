export const checkmarkPath = "M3 6L5.16667 8.5L9.5 4";

export const getCheckmarkSvg = (color: string, size: number) => `
  <svg width="${size}" height="${size}" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="${checkmarkPath}" stroke="${color}" stroke-width="1.5"/>
  </svg>
`;
