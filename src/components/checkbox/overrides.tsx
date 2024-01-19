import { CheckboxOverrides } from "baseui/checkbox";
import { LabelMedium } from "baseui/typography";
import {
  checkmarkBaseModifiedStyles,
  getCheckmarkBaseStyles,
  checkmarkCheckedModifiedStyles,
  getCheckmarkDisabledModifiedStyles,
} from "./styles";
import { boxShadowFocusStyles } from "../../shared/styles/boxShadowFocusStyles";
import { getCheckmarkBackgroundImage } from "./checkmarks";
import { getCheckmarkLabelStyles } from "../../shared/theme/checkmarkCommonLabelStyles";

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
        ...getCheckmarkLabelStyles(!!$disabled),
      }),
    },
    Checkmark: {
      style: ({ $disabled, $checked, $isIndeterminate, $isFocused }) => ({
        ...getCheckmarkBaseStyles($isIndeterminate),
        backgroundImage: getCheckmarkBackgroundImage($isIndeterminate, $checked),
        ...checkmarkBaseModifiedStyles,
        ...($checked || $isIndeterminate ? checkmarkCheckedModifiedStyles : {}),
        ...($disabled ? getCheckmarkDisabledModifiedStyles($checked) : {}),
        ...($isFocused ? boxShadowFocusStyles : {}),
      }),
    },
  };
};
