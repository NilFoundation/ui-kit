import { RadioOverrides } from "baseui/radio";
import { PRIMITIVE_COLORS } from "../../shared";

export const getRadioOverrides = (checked?: boolean, disabled?: boolean, error?: boolean): RadioOverrides => ({
  RadioMarkInner: {
    style: () => ({
      backgroundColor: checked ? PRIMITIVE_COLORS.black : error ? PRIMITIVE_COLORS.error700 : PRIMITIVE_COLORS.black,
      borderRadius: checked ? 0 : 100,
      width: !checked ? "16px" : "7px",
      height: !checked ? "16px" : "7px",
      borderWidth: "9px",

      ":hover": {
        backgroundColor: !disabled
          ? !checked
            ? error
              ? PRIMITIVE_COLORS.error600
              : PRIMITIVE_COLORS.primary800
            : PRIMITIVE_COLORS.black
          : PRIMITIVE_COLORS.black,
      },
    }),
  },
  RadioMarkOuter: {
    style: () => ({
      backgroundColor: !disabled
        ? error
          ? PRIMITIVE_COLORS.error400
          : checked
          ? PRIMITIVE_COLORS.white
          : PRIMITIVE_COLORS.primary500
        : PRIMITIVE_COLORS.primary700,
      ":hover": {
        backgroundColor: !disabled
          ? checked
            ? error
              ? PRIMITIVE_COLORS.error600
              : PRIMITIVE_COLORS.primary50
            : error
            ? PRIMITIVE_COLORS.error400
            : PRIMITIVE_COLORS.primary500
          : PRIMITIVE_COLORS.primary700,
      },
    }),
  },
  Label: {
    style: () => ({
      color: disabled ? PRIMITIVE_COLORS.primary300 : PRIMITIVE_COLORS.white,
    }),
  },
  Description: {
    style: () => ({
      color: disabled ? PRIMITIVE_COLORS.primary300 : PRIMITIVE_COLORS.white,
    }),
  },
});
