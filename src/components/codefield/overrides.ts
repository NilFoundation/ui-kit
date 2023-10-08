import { expandProperty } from "inline-style-expand-shorthand";
import { PRIMITIVE_COLORS } from "../../shared";

export const getCopyButtonOverrides = () => {
  return {
    BaseButton: {
      style: {
        ...expandProperty("padding", "4px"),
        ...expandProperty("borderRadius", "2px"),
      },
    },
  };
};

export const getTooltipOverrides = (isCopied: boolean) => {
  if (!isCopied) {
    return {};
  }

  return {
    Body: {
      style: {
        background: PRIMITIVE_COLORS.green200,
      },
    },
    Inner: {
      style: {
        background: PRIMITIVE_COLORS.green200,
      },
    },
  };
};
