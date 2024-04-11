import { INPUT_SIZE } from "../input";
import { FormControlOverrides } from "baseui/form-control";
import { PRIMITIVE_COLORS } from "../../shared";
import FormControlLabel from "./ui/FormControlLabel";
import { expandProperty } from "inline-style-expand-shorthand";
import { ParagraphXSmall } from "baseui/typography";

const getCaptionColor = (isError: boolean): string => {
  if (isError) {
    return PRIMITIVE_COLORS.red400;
  }

  return PRIMITIVE_COLORS.gray300;
};

export const getFormControlOverrides = (
  size: INPUT_SIZE,
  isReadOnly: boolean,
  valueLabel?: string,
  required?: boolean
): FormControlOverrides => {
  return {
    Label: {
      component: ({ $disabled, ...props }) => (
        <FormControlLabel
          {...props}
          isDisabled={$disabled || isReadOnly}
          valueLabel={valueLabel}
          size={size}
          required={required}
        />
      ),
      style: {
        color: PRIMITIVE_COLORS.gray50,
        ...expandProperty("margin", "4px 0"),
      },
    },
    Caption: {
      style: ({ $error }) => ({
        color: getCaptionColor($error),
        ...expandProperty("margin", "4px 0"),
      }),
      component: ParagraphXSmall,
    },
    LabelContainer: {
      style: {
        ...expandProperty("margin", "0"),
      },
    },
  };
};
