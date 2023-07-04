import { PopoverOverrides } from "baseui/popover";
import { tooltipArrowStyles, tooltipBodyStyles, tooltipInnerStyles } from "./styles";

export const getTooltipOverrides = (): PopoverOverrides => {
  return {
    Body: {
      style: {
        ...tooltipBodyStyles,
      },
    },
    Inner: {
      style: {
        ...tooltipInnerStyles,
      },
    },
    Arrow: {
      style: {
        ...tooltipArrowStyles,
      },
    },
  };
};
