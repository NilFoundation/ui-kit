import { useStyletron } from "baseui";
import { BUTTON_ICON_KIND, BUTTON_ICON_SIZE, ButtonIconProps } from "./types";
import React, { useMemo } from "react";
import { getButtonIconStyle, middleIconStyle } from "./style";

export const ButtonIcon = ({
  role = "button",
  kind = BUTTON_ICON_KIND.primary,
  size = BUTTON_ICON_SIZE.m,
  icon,
  onClick,
  disabled = false,
  tabIndex,
  href,
  className,
}: ButtonIconProps) => {
  const [css] = useStyletron();
  const iconClassName = css(middleIconStyle);

  const buttonClassName = useMemo(() => css(getButtonIconStyle(kind, size)), [kind, size]);

  const elementName = role === "button" ? "button" : "a";

  return React.createElement(
    elementName,
    {
      className: className ? `${buttonClassName} ${className}` : buttonClassName,
      onClick,
      disabled,
      tabIndex,
      href,
    },
    React.cloneElement(icon, { size: size === BUTTON_ICON_SIZE.l ? 24 : 16, className: iconClassName })
  );
};
