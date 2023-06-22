import React from "react";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "baseui/button";
import { getButtonOverrides } from "./overrides";
import { BUTTON_KIND, BUTTON_SHAPE, BUTTON_SIZE } from "./types";

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
