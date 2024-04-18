import { COLORS } from "../../shared";
import { encodeInlineSvg } from "../../shared/utils/encodeInlineSvg";
import { getCheckmarkSvg } from "../../shared/utils/getCheckmarkSvg";

export const blackCheckmark = getCheckmarkSvg(COLORS.gray900, 12);

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
