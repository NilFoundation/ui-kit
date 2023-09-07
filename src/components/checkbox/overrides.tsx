import { CheckboxOverrides } from "baseui/checkbox";
import { LabelMedium } from "baseui/typography";
import { blackCheckmark, blackIndeterminateCheckmark, whiteCheckmark, whiteIndeterminateCheckmark } from "./checkmarks";
import {
  getCheckmarkBaseModifiedStyles,
  getCheckmarkBaseStyles,
  getCheckmarkCheckedModifiedStyles,
  getCheckmarkDisabledModifiedStyles,
  getCheckmarkErrorModifiedStyles,
} from "./styles";
import { PRIMITIVE_COLORS } from "../../shared";

const getCheckmarkBackgroundImage = (isIndeterminate: boolean, isChecked: boolean, isError: boolean) => {
  if (isIndeterminate) {
    return `url("data:image/svg+xml,${isError ? whiteIndeterminateCheckmark : blackIndeterminateCheckmark}")`;
  }
  if (!isChecked) {
    return null;
  }
  return `url("data:image/svg+xml,${isError ? whiteCheckmark : blackCheckmark}")`;
};

export const getCheckboxOverrides = (): CheckboxOverrides => {
  return {
    Root: {
      style: {
        alignItems: "center",
      },
    },
    Label: {
      component: LabelMedium,
      style: ({ $labelPlacement, $disabled }) => ({
        paddingBottom: $labelPlacement === "top" ? "10px" : null,
        paddingTop: $labelPlacement === "bottom" ? "10px" : null,
        paddingRight: $labelPlacement === "left" ? "10px" : null,
        paddingLeft: $labelPlacement === "right" ? "10px" : null,
        color: $disabled ? PRIMITIVE_COLORS.gray600 : PRIMITIVE_COLORS.white,
      }),
    },
    Checkmark: {
      style: ({ $error, $disabled, $checked, $isIndeterminate, $isFocused }) => ({
        ...getCheckmarkBaseStyles($isIndeterminate),
        backgroundImage: getCheckmarkBackgroundImage($isIndeterminate, $checked, $error),

        ...getCheckmarkBaseModifiedStyles($isFocused),
        ...($error ? getCheckmarkErrorModifiedStyles($isFocused) : {}),
        ...($checked || $isIndeterminate ? getCheckmarkCheckedModifiedStyles($isFocused, $error) : {}),
        ...($disabled ? getCheckmarkDisabledModifiedStyles($checked) : {}),
      }),
    },
  };
};
