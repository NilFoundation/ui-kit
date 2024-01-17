import { ReactElement } from "react";

export enum BUTTON_ICON_KIND {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  danger = "danger",
}

export enum BUTTON_ICON_SIZE {
  s = "s",
  m = "m",
  l = "l",
}

export type ButtonIconProps = {
  role?: "button" | "link";
  href?: string;
  icon: ReactElement;
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean;
  kind?: BUTTON_ICON_KIND;
  className?: string;
  size?: BUTTON_ICON_SIZE;
  tabIndex?: number;
};
