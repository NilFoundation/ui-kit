import { forwardRef } from "react";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "baseui/button";
import { getButtonOverrides } from "./overrides";
import { BUTTON_KIND, BUTTON_SHAPE, BUTTON_SIZE } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type ButtonProps = Omit<BaseButtonProps, "kind" | "shape" | "size"> & {
  kind?: BUTTON_KIND;
  size?: BUTTON_SIZE;
  shape?: BUTTON_SHAPE;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      kind = BUTTON_KIND.primary,
      size = BUTTON_SIZE.default,
      shape = BUTTON_SHAPE.default,
      disabled,
      isLoading,
      colors,
      startEnhancer,
      endEnhancer,
      className,
      children,
      overrides: baseOverrides,
      ...props
    },
    ref
  ) => {
    const buttonOverrides = getButtonOverrides(kind, size, colors);
    const overrides = getMergedOverrides(buttonOverrides, baseOverrides);

    return (
      <BaseButton
        ref={ref}
        {...props}
        className={className}
        isLoading={isLoading}
        shape={shape}
        kind={kind === BUTTON_KIND.danger ? BUTTON_KIND.secondary : kind}
        size={size}
        disabled={disabled}
        startEnhancer={startEnhancer}
        endEnhancer={endEnhancer}
        overrides={overrides}
      >
        {children}
      </BaseButton>
    );
  }
);
Button.displayName = "Button";

export default Button;
