import { CheckboxOverrides } from "baseui/checkbox";
import { LabelMedium } from "baseui/typography";
import { getBorderColor, getBackgroundColor, getColorForCheckmark, getHoverBackgroundColor } from "./styles";

export const checkboxOverrides: CheckboxOverrides = {
  Root: {
    style: {
      alignItems: "center",
    },
  },
  Label: {
    component: LabelMedium,
    style: ({ $labelPlacement }) => ({
      paddingBottom: $labelPlacement === "top" ? "10px" : null,
      paddingTop: $labelPlacement === "bottom" ? "10px" : null,
      paddingRight: $labelPlacement === "left" ? "10px" : null,
      paddingLeft: $labelPlacement === "right" ? "10px" : null,
    }),
  },
  Checkmark: {
    style: ({ $error, $disabled, $checked, $isIndeterminate, $isFocused }) => ({
      width: "15px",
      height: "15px",
      boxSizing: "border-box",
      borderLeftWidth: "1px",
      borderRightWidth: "1px",
      borderTopWidth: "1px",
      borderBottomWidth: "1px",
      marginTop: null,
      marginBottom: null,
      marginRight: null,
      marginLeft: null,
      borderLeftColor: getBorderColor($error, $disabled, $checked, $isFocused),
      borderRightColor: getBorderColor($error, $disabled, $checked, $isFocused),
      borderTopColor: getBorderColor($error, $disabled, $checked, $isFocused),
      borderBottomColor: getBorderColor($error, $disabled, $checked, $isFocused),
      backgroundColor: getBackgroundColor($error, $disabled, $checked, $isFocused),
      backgroundImage: $checked ? getColorForCheckmark($error, $isIndeterminate) : null,
      backgroundSize: $isIndeterminate ? "8px" : "9px",
      outline: "none",
      backgroundPositionY: $isIndeterminate ? "center" : "2px",
      backgroundPositionX: $isIndeterminate ? "center" : "2px",
      ":hover": {
        backgroundColor: getHoverBackgroundColor($error, $checked, $disabled),
      },
    }),
  },
};
