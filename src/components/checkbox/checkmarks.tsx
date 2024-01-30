import { encodeInlineSvg } from "../../shared/utils/encodeInlineSvg";

export const blackCheckmark = `
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6L5.16667 8.5L9.5 4" stroke="#212121" stroke-width="1.5"/>
  </svg>
`;

export const blackIndeterminateCheckmark =
  "<svg width='8' height='3' viewBox='0 0 8 3' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='7.5' height='2.5' fill='#000000'/></svg>";

export const getCheckmarkBackgroundImage = (isIndeterminate: boolean, isChecked: boolean) => {
  if (isIndeterminate) {
    return `url("${encodeInlineSvg(blackIndeterminateCheckmark)}")`;
  }

  if (!isChecked) {
    return null;
  }

  return `url("${encodeInlineSvg(blackCheckmark)}")`;
};
