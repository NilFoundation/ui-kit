import { CheckboxOverrides } from "baseui/checkbox";
import { LabelMedium } from "baseui/typography";
import {
  checkmarkBaseModifiedStyles,
  getCheckmarkBaseStyles,
  checkmarkCheckedModifiedStyles,
  getCheckmarkDisabledModifiedStyles,
} from "./styles";
import { boxShadowFocusStyles } from "../../shared/styles/boxShadowSharedStyles";
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
        paddingBottom: $labelPlacement === "top" ? "12px" : null,
        paddingTop: $labelPlacement === "bottom" ? "12px" : null,
        paddingRight: $labelPlacement === "left" ? "12px" : null,
        paddingLeft: $labelPlacement === "right" ? "12px" : null,
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
