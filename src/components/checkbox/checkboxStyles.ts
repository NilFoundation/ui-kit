import { encodeInlineSvg } from "../../shared/utils/encodeInlineSvg";
import { whiteIndeterminateCheckmark, whiteCheckmark, blackCheckmark, blackIndeterminateCheckmark } from "./checkmarks";

export const getCheckmarkBackgroundImage = (isIndeterminate: boolean, isChecked: boolean, isError: boolean) => {
  if (isIndeterminate) {
    return `url("${encodeInlineSvg(isError ? whiteIndeterminateCheckmark : blackIndeterminateCheckmark)}")`;
  }

  if (!isChecked) {
    return null;
  }

  return `url("${encodeInlineSvg(isError ? whiteCheckmark : blackCheckmark)}")`;
};
