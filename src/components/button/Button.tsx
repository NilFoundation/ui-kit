import { forwardRef, ReactNode } from "react";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "baseui/button";
import { getButtonOverrides } from "./overrides";
import { BUTTON_KIND, BUTTON_SHAPE, BUTTON_SIZE } from "./types";
import ButtonNode from "./ui/ButtonNode";

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
      ...props
    },
    ref
  ) => {
    const overrides = getButtonOverrides(kind, size, colors);

    return (
      <BaseButton
        ref={ref}
        {...props}
        className={className}
        isLoading={isLoading}
        shape={shape}
        kind={kind}
        size={size}
        disabled={disabled}
        startEnhancer={
          startEnhancer && (
            <ButtonNode isDisabled={disabled} node={startEnhancer as ReactNode} size={size} kind={kind} />
          )
        }
        endEnhancer={
          endEnhancer && <ButtonNode isDisabled={disabled} node={endEnhancer as ReactNode} size={size} kind={kind} />
        }
        overrides={overrides}
      >
        {children}
      </BaseButton>
    );
  }
);
Button.displayName = "Button";

export default Button;
