import { CheckboxOverrides } from "baseui/checkbox";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";
import { boxShadowFocusStyles } from "../../shared/styles/boxShadowSharedStyles";
import { getCheckmarkLabelStyles } from "../../shared/theme/checkmarkCommonLabelStyles";
import { getSwitchBackgroundStyles } from "./styles";
import { withoutMarginStyles } from "../../shared/styles/withoutMarginStyles";
import { LabelMedium } from "baseui/typography";

export const getToggleOverrides = (disabled?: boolean): CheckboxOverrides => {
  return {
    Root: {
      style: {
        alignItems: "center",
      },
    },
    Label: {
      component: LabelMedium,
      style: ({ $labelPlacement }) => ({
        paddingBottom: $labelPlacement === "top" ? "12px" : null,
        paddingTop: $labelPlacement === "bottom" ? "12px" : null,
        paddingRight: $labelPlacement === "left" ? "12px" : null,
        paddingLeft: $labelPlacement === "right" ? "12px" : null,
        ...getCheckmarkLabelStyles(!!disabled),
      }),
    },
    Toggle: {
      style: ({ $checked }) => ({
        backgroundColor: PRIMITIVE_COLORS.gray800,
        ...expandProperty("transition", "transform 0.15s ease-in"),
        width: "12px",
        height: "12px",
        ...expandProperty("borderRadius", "2px"),
        ...($checked ? { transform: "translateX(14px)" } : {}),
      }),
    },
    ToggleTrack: {
      style: ({ $checked, $disabled, $isFocused }) => ({
        width: "30px",
        height: "16px",
        boxSizing: "border-box",
        boxShadow: "none",
        ...expandProperty("transition", "transform 0.15s ease-in"),
        ...expandProperty("borderRadius", "4px"),
        ...expandProperty("padding", "2px"),
        ...getSwitchBackgroundStyles($checked, $disabled),
        ...withoutMarginStyles,
        ...($isFocused ? boxShadowFocusStyles : {}),
      }),
    },
  };
};
