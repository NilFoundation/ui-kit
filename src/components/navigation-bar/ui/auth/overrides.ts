import { AvatarOverrides } from "baseui/avatar";
import { PRIMITIVE_COLORS } from "../../../../shared";
import { PopoverOverrides } from "baseui/popover";
import { expandProperty } from "inline-style-expand-shorthand";

export const getAvatarOverrides = (): AvatarOverrides => {
  return {
    Root: {
      style: {
        backgroundColor: PRIMITIVE_COLORS.gray100,
        marginRight: "4px",
      },
    },
    Initials: {
      style: {
        fontSize: "14px",
        lineHeight: "16px",
        color: PRIMITIVE_COLORS.gray800,
      },
    },
  };
};

export const getPopoverOverrides = (): PopoverOverrides => {
  return {
    Body: {
      style: {
        marginRight: "16px",
        boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
      },
    },
    Inner: {
      style: {
        backgroundColor: PRIMITIVE_COLORS.white,
        ...expandProperty("borderRadius", "0"),
      },
    },
  };
};
