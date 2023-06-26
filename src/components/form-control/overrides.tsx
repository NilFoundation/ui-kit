import { INPUT_SIZE } from "../input";
import { FormControlOverrides } from "baseui/form-control";
import { PRIMITIVE_COLORS } from "../../shared";
import FormControlLabel from "./ui/FormControlLabel";

const getCaptionColor = (isError: boolean, isPositive: boolean, isDisabled: boolean): string => {
  if (isDisabled) {
    return PRIMITIVE_COLORS.primary300;
  }
  if (isError) {
    return PRIMITIVE_COLORS.error400;
  }
  if (isPositive) {
    return PRIMITIVE_COLORS.positive400;
  }
  return PRIMITIVE_COLORS.primary300;
};

export const getFormControlOverrides = (
  size: INPUT_SIZE,
  isReadOnly: boolean,
  valueLabel?: string
): FormControlOverrides => {
  return {
    Label: {
      component: ({ $disabled, ...props }) => (
        <FormControlLabel {...props} isDisabled={$disabled || isReadOnly} valueLabel={valueLabel} size={size} />
      ),
    },
    Caption: {
      style: ({ $error, $positive, $disabled }) => ({
        color: getCaptionColor($error, $positive, $disabled),
      }),
    },
  };
};
