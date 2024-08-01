import { AriaRole } from "react";
import { ButtonProps as BaseButtonProps } from "baseui/button";
import type { XOR } from "ts-xor";
import { Merge } from "ts-essentials";

export enum BUTTON_KIND {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  danger = "danger",
  toggle = "toggle",
  text = "text",
}

export enum BUTTON_SIZE {
  mini = "mini",
  default = "default",
  compact = "compact",
  large = "large",
}

export type ButtonCommonProps = Omit<
  Merge<
    React.ComponentProps<"button">,
    Merge<
      BaseButtonProps,
      {
        size?: BUTTON_SIZE;
        disabled?: boolean;
        isLoading?: boolean;
        className?: string;
        role?: AriaRole;
      }
    >
  >,
  "ref"
>;

export type ToggleButtonProps = Merge<
  ButtonCommonProps,
  {
    kind: BUTTON_KIND.toggle;
    checked?: boolean;
  }
>;

export type RegularButtonProps = Merge<
  ButtonCommonProps,
  {
    kind?: Exclude<BUTTON_KIND, BUTTON_KIND.toggle>;
  }
>;

export type ButtonProps = XOR<ToggleButtonProps, RegularButtonProps>;
