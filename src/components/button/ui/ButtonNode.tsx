import React, { FC, ReactNode } from "react";
import { BUTTON_KIND, BUTTON_SIZE } from "../types";
import { PRIMITIVE_COLORS } from "../../../shared";

type ButtonNodeProps = {
  node: ReactNode;
  size: BUTTON_SIZE;
  kind: BUTTON_KIND;
  isDisabled?: boolean;
};

const iconSize = {
  [BUTTON_SIZE.mini]: "16px",
  [BUTTON_SIZE.compact]: "16px",
  [BUTTON_SIZE.default]: "20px",
  [BUTTON_SIZE.large]: "24px",
};

const iconColor = {
  [BUTTON_KIND.primary]: PRIMITIVE_COLORS.black,
  [BUTTON_KIND.secondary]: PRIMITIVE_COLORS.white,
  [BUTTON_KIND.tertiary]: PRIMITIVE_COLORS.white,
};

const ButtonNode: FC<ButtonNodeProps> = ({ node, isDisabled, size, kind }) => {
  if (React.isValidElement(node)) {
    return React.cloneElement(node as any, {
      size: iconSize[size],
      color: isDisabled ? PRIMITIVE_COLORS.primary500 : iconColor[kind],
    });
  }
  return <>{node}</>;
};

export default ButtonNode;
