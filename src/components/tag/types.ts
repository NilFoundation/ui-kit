import { TagProps as BaseTagProps } from "baseui/tag";

export enum TAG_KIND {
  gray = "gray",
  blue = "blue",
  green = "green",
  yellow = "yellow",
  purple = "purple",
  red = "red",
  white = "white",
}

export enum TAG_SIZE {
  s = "s",
  m = "m",
}

export type TagProps = Omit<
  BaseTagProps,
  | "kind"
  | "variant"
  | "color"
  | "size"
  | "closeable"
  | "disabled"
  | "onClick"
  | "onKeyDown"
  | "onActionClick"
  | "onActionKeyDown"
  | "isFocused"
  | "isHovered"
> & {
  kind?: TAG_KIND;
  size?: TAG_SIZE;
  fill?: boolean;
};
