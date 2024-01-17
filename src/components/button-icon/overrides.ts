import { ButtonOverrides } from "baseui/button";
import { buttonIconPaddingStyles } from "./styles";
import { ButtonIconSize } from "./types";

export const getButtonIconOverrides = (size: ButtonIconSize): ButtonOverrides => {
  return {
    Root: {
      style: {
        ...buttonIconPaddingStyles[size],
      },
    },
  };
};
