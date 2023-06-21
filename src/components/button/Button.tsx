import React from "react";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "baseui/button";
import { getButtonOverrides } from "./overrides";

export enum BUTTON_KIND {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

export enum BUTTON_SIZE {
  mini = "mini",
  default = "default",
  compact = "compact",
  large = "large",
}

export enum BUTTON_SHAPE {
  default = "default",
  pill = "pill",
  round = "round",
  circle = "circle",
  square = "square",
}

export type ButtonProps = BaseButtonProps & {
  kind?: BUTTON_KIND;
  size?: BUTTON_SIZE;
  disabled?: boolean;
  isLoading?: boolean;
  shape?: BUTTON_SHAPE;
};

const Button: React.FC<ButtonProps> = ({ kind, size = BUTTON_SIZE.default, disabled, isLoading, shape, ...props }) => {
  const overrides = getButtonOverrides(kind, shape, size);

  return (
    <BaseButton
      {...props}
      isLoading={isLoading}
      shape={shape}
      kind={kind}
      size={size}
      disabled={disabled}
      overrides={overrides}
    />
  );
};

export default Button;
