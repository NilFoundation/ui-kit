import { CheckboxOverrides } from "baseui/checkbox";
import { LabelMedium } from "baseui/typography";
import {
  getCheckmarkBaseModifiedStyles,
  getCheckmarkBaseStyles,
  getCheckmarkCheckedModifiedStyles,
  getCheckmarkDisabledModifiedStyles,
  getCheckmarkErrorModifiedStyles,
} from "./styles";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";
import { StyleObject } from "styletron-standard";
import { boxShadowFocusStyles } from "../../shared/styles/boxShadowFocusStyles";
import { getCheckmarkBackgroundImage } from "./checkboxStyles";

const getToggleBackgroundStyles = (isChecked: boolean, isError: boolean, $disabled: boolean): StyleObject => {
  const transition = expandProperty("transition", "background-color 0.15s");

  if (isError) {
    return {
      backgroundColor: PRIMITIVE_COLORS.red500,
      ...transition,
    };
  }

  if ($disabled) {
    return {
      backgroundColor: PRIMITIVE_COLORS.gray400,
      ...transition,
    };
  }

  if (isChecked) {
    return {
      backgroundColor: PRIMITIVE_COLORS.green200,
      ...transition,
      ":hover": {
        backgroundColor: PRIMITIVE_COLORS.green100,
      },
      ":active": {
        backgroundColor: PRIMITIVE_COLORS.green50,
      },
    };
  }

  return {
    backgroundColor: PRIMITIVE_COLORS.gray200,
    ...transition,
    ":hover": {
      backgroundColor: PRIMITIVE_COLORS.gray100,
    },
    ":active": {
      backgroundColor: PRIMITIVE_COLORS.gray50,
    },
  };
};

const getLabelColorStyles = ($disabled: boolean): StyleObject => {
  const transition = expandProperty("color 0.15s");

  if ($disabled) {
    return {
      color: PRIMITIVE_COLORS.gray400,
      ...transition,
    };
  }

  return {
    color: PRIMITIVE_COLORS.gray200,
    ...transition,
    ":hover": {
      color: PRIMITIVE_COLORS.gray100,
    },
    ":active": {
      color: PRIMITIVE_COLORS.gray50,
    },
  };
};

export const getCheckboxOverrides = (): CheckboxOverrides => {
  return {
    Root: {
      style: ({ $disabled }) => ({
        alignItems: "center",
        ...getLabelColorStyles($disabled),
      }),
    },
    Label: {
      component: LabelMedium,
      style: ({ $labelPlacement }) => ({
        paddingBottom: $labelPlacement === "top" ? "10px" : null,
        paddingTop: $labelPlacement === "bottom" ? "10px" : null,
        paddingRight: $labelPlacement === "left" ? "10px" : null,
        paddingLeft: $labelPlacement === "right" ? "10px" : null,
        color: "inherit",
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
        ...($isFocused ? boxShadowFocusStyles : {}),
      }),
    },
    Toggle: {
      style: {
        backgroundColor: PRIMITIVE_COLORS.gray800,
        ...expandProperty("transition", "transform 0.15s"),
        width: "12px",
        height: "12px",
        ...expandProperty("borderRadius", "2px"),
      },
    },
    ToggleTrack: {
      style: ({ $checked, $error, $disabled, $isFocused }) => ({
        width: "30px",
        height: "16px",
        boxSizing: "border-box",
        boxShadow: "none",
        ...expandProperty("borderRadius", "4px"),
        ...expandProperty("padding", "2px"),
        ...getToggleBackgroundStyles($checked, $error, $disabled),
        ...expandProperty("margin", "0"),
        ...($isFocused ? boxShadowFocusStyles : {}),
      }),
    },
  };
};
