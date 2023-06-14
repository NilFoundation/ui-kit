import React from "react";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "baseui/button";

export enum KIND {
  // ghost = "ghost",
  // dashed = "dashed",
  // icon = "icon",
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

export type ButtonProps = Omit<BaseButtonProps, "kind"> & {
  kind?: KIND;
};

const Button: React.FC<ButtonProps> = ({ kind, ...props }) => {
  return <BaseButton {...props} kind={kind} />;
};

export default Button;
