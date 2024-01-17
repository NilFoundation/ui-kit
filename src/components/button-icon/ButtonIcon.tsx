import { cloneElement, forwardRef } from "react";
import { BUTTON_SIZE, Button } from "../button";
import { getButtonIconOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { type ButtonIconProps } from "./types";
import { useIconSize } from "./useIconSize";

const ButtinIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ kind, size = BUTTON_SIZE.default, overrides: baseOverrides, icon, ...props }, ref) => {
    const buttonIconOverrides = getButtonIconOverrides(size);
    const overrides = getMergedOverrides(buttonIconOverrides, baseOverrides);
    const iconSize = useIconSize(size);

    return (
      <Button ref={ref} kind={kind} size={size} overrides={overrides} {...props}>
        {cloneElement(icon, { size: iconSize })}
      </Button>
    );
  }
);
ButtinIcon.displayName = "ButtonIcon";

export default ButtinIcon;
