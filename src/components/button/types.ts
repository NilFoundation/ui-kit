import { AriaRole } from "react";
import { ButtonProps as BaseButtonProps } from "baseui/button";
import type { XOR } from "ts-xor";

export enum BUTTON_KIND {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  danger = "danger",
  toggle = "toggle",
}

export enum BUTTON_SIZE {
  mini = "mini",
  default = "default",
  compact = "compact",
  large = "large",
}

export enum BUTTON_SHAPE {
  default = "default",
  square = "square",
}

export type ButtonCommonProps = Omit<BaseButtonProps, "kind" | "shape" | "size"> & {
  size?: BUTTON_SIZE;
  shape?: BUTTON_SHAPE;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  role?: AriaRole;
};

export type ToggleButtonProps = {
  kind: BUTTON_KIND.toggle;
  checked?: boolean;
} & ButtonCommonProps;

export type RegularButtonProps = {
  kind: Exclude<BUTTON_KIND, BUTTON_KIND.toggle>;
} & ButtonCommonProps;

export type ButtonProps = XOR<ToggleButtonProps, RegularButtonProps>;
