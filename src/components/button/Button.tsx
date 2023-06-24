import React from "react";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "baseui/button";
import { getButtonOverrides } from "./overrides";
import { BUTTON_KIND, BUTTON_SHAPE, BUTTON_SIZE } from "./types";

export type ButtonProps = Omit<BaseButtonProps, "kind" | "shape" | "size"> & {
  kind?: BUTTON_KIND;
  size?: BUTTON_SIZE;
  shape?: BUTTON_SHAPE;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  kind = BUTTON_KIND.primary,
  size = BUTTON_SIZE.default,
  shape = BUTTON_SHAPE.default,
  disabled,
  isLoading,
  colors,
  className,
  ...props
}) => {
  const overrides = getButtonOverrides(kind, shape, size, colors);

  return (
    <BaseButton
      {...props}
      className={className}
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
