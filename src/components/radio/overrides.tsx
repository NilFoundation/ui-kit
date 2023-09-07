import { RadioOverrides } from "baseui/radio";
import { PRIMITIVE_COLORS } from "../../shared";
import {
  getRadioMarkInnerErrorStyles,
  getRadioMarkInnerStyles,
  getRadioMarkOuterErrorStyles,
  getRadioMarkOuterStyles,
  radioMarkInnerDisabledStyles,
  radioMarkOuterDisabledStyles,
} from "./styles";

export const getRadioOverrides = (): RadioOverrides => ({
  RadioMarkInner: {
    style: ({ $checked, $error, $disabled }) => {
      return {
        ...getRadioMarkInnerStyles($checked),
        ...($error ? getRadioMarkInnerErrorStyles($checked) : {}),
        ...($disabled ? radioMarkInnerDisabledStyles : {}),
      };
    },
  },
  RadioMarkOuter: {
    style: ({ $checked, $isFocused, $error, $disabled }) => {
      return {
        ...getRadioMarkOuterStyles($checked, $isFocused),
        ...($error ? getRadioMarkOuterErrorStyles($checked, $isFocused) : {}),
        ...($disabled ? radioMarkOuterDisabledStyles : {}),
      };
    },
  },
  Label: {
    style: ({ $disabled }) => ({
      color: $disabled ? PRIMITIVE_COLORS.gray300 : PRIMITIVE_COLORS.white,
    }),
  },
  Description: {
    style: ({ $disabled }) => ({
      color: $disabled ? PRIMITIVE_COLORS.gray300 : PRIMITIVE_COLORS.white,
    }),
  },
});
