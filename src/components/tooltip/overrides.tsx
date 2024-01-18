import { PopoverOverrides } from "baseui/popover";
import { TOOLTIP_KIND } from "./types";
import { PRIMITIVE_COLORS, SPACE } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

const borderRadiusStyles = expandProperty("borderRadius", "8px");

export const getTooltipOverrides = (kind: TOOLTIP_KIND): PopoverOverrides => {
  return {
    Body: {
      style: {
        ...borderRadiusStyles,
        maxWidth: "216px",
        minWidth: 0,
        ...getBackgroundKindStyles(kind),
      },
    },
    Inner: {
      style: {
        ...borderRadiusStyles,
        textAlign: "center",
        lineHeight: "16px",
        fontSize: "12px",
        fontWeight: 500,
        color: PRIMITIVE_COLORS.gray900,
        ...expandProperty("padding", SPACE[12]),
        ...getBackgroundKindStyles(kind),
      },
    },
    Arrow: {
      style: {
        ...getBackgroundKindStyles(kind),
        width: "14px",
        height: "14px",
        ...expandProperty("borderRadius", "2px"),
      },
    },
  };
};

const getBackgroundKindStyles = (kind: TOOLTIP_KIND) => {
  switch (kind) {
    case TOOLTIP_KIND.SUCCESS:
      return {
        backgroundColor: PRIMITIVE_COLORS.green200,
      };
    case TOOLTIP_KIND.ERROR:
      return {
        backgroundColor: PRIMITIVE_COLORS.red200,
      };
    default:
      return {
        backgroundColor: PRIMITIVE_COLORS.gray50,
      };
  }
};
