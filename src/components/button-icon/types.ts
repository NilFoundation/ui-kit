import { ReactElement } from "react";
import { BUTTON_SIZE, ButtonProps } from "../button";

export type ButtonIconSize = BUTTON_SIZE.default | BUTTON_SIZE.large | BUTTON_SIZE.compact;

export type ButtonIconProps = Omit<ButtonProps, "checked" | "size" | "startEnhancer" | "endEnhancer" | "colors"> & {
  icon: ReactElement;
  size?: ButtonIconSize;
};
