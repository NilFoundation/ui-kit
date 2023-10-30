import { forwardRef } from "react";
import { Button as BaseButton } from "baseui/button";
import { getButtonOverrides } from "./overrides";
import { BUTTON_KIND, BUTTON_SHAPE, BUTTON_SIZE, ButtonProps } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

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
      role,
      checked,
      overrides: baseOverrides,
      ...props
    },
    ref
  ) => {
    const buttonOverrides = getButtonOverrides(kind, size, colors, checked);
    const overrides = getMergedOverrides(buttonOverrides, baseOverrides);
    const buttonKind = kind === BUTTON_KIND.danger || kind === BUTTON_KIND.toggle ? BUTTON_KIND.secondary : kind;
    const buttonRole = role ?? (kind === BUTTON_KIND.toggle ? "switch" : undefined);

    return (
      <BaseButton
        ref={ref}
        {...props}
        className={className}
        isLoading={isLoading}
        shape={shape}
        kind={buttonKind}
        size={size}
        disabled={disabled}
        startEnhancer={startEnhancer}
        endEnhancer={endEnhancer}
        overrides={overrides}
        role={buttonRole}
        aria-checked={checked}
      >
        {children}
      </BaseButton>
    );
  }
);
Button.displayName = "Button";

export default Button;
