import { PRIMITIVE_COLORS } from "../../shared";
import { whiteCheckmark, blackCheckmark, whiteIndeterminateCheckmark, blackIndeterminateCheckmark } from "./checkmarks";

export const getBorderColor = (error: boolean, disabled: boolean, checked: boolean, isFocused: boolean) => {
  if (!checked) {
    if (!isFocused) {
      if (!disabled) {
        return error ? PRIMITIVE_COLORS.error400 : PRIMITIVE_COLORS.primary500;
      } else {
        return !checked ? PRIMITIVE_COLORS.primary600 : "transparent";
      }
    } else {
      return error ? PRIMITIVE_COLORS.error400 : PRIMITIVE_COLORS.primary500;
    }
  } else {
    return "transparent";
  }
};

export const getBackgroundColor = (error: boolean, disabled: boolean, checked: boolean, isFocused: boolean) => {
  if (!disabled) {
    if (!checked) {
      if (!isFocused) {
        return error ? PRIMITIVE_COLORS.error700 : PRIMITIVE_COLORS.black;
      } else {
        return error ? PRIMITIVE_COLORS.error500 : PRIMITIVE_COLORS.mono600;
      }
    } else {
      if (isFocused) {
        return error ? PRIMITIVE_COLORS.error700 : PRIMITIVE_COLORS.primary100;
      } else {
        return error ? PRIMITIVE_COLORS.error500 : PRIMITIVE_COLORS.white;
      }
    }
  } else {
    return !checked ? PRIMITIVE_COLORS.primary900 : PRIMITIVE_COLORS.primary600;
  }
};

export const getHoverBackgroundColor = (error: boolean, checked: boolean, disabled: boolean) => {
  if (!disabled) {
    if (!checked) {
      return error ? PRIMITIVE_COLORS.error600 : PRIMITIVE_COLORS.primary800;
    } else {
      return error ? PRIMITIVE_COLORS.error600 : PRIMITIVE_COLORS.primary50;
    }
  }
};

export const getColorForCheckmark = (error: boolean, isIndeterminate: boolean) => {
  if (!isIndeterminate) {
    if (error) {
      return `url("data:image/svg+xml,${whiteCheckmark}")`;
    } else {
      return `url("data:image/svg+xml,${blackCheckmark}")`;
    }
  } else {
    if (error) {
      return `url("data:image/svg+xml,${whiteIndeterminateCheckmark}")`;
    } else {
      return `url("data:image/svg+xml,${blackIndeterminateCheckmark}")`;
    }
  }
};
