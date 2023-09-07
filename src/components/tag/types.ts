import { TagProps as BasTagProps } from "baseui/tag";

export enum TAG_KIND {
  gray = "gray",
  positive = "positive",
  negative = "negative",
  warning = "warning",
}

export enum TAG_VARIANT {
  light = "light",
  solid = "solid",
}

export type TagProps = Omit<BasTagProps, "kind" | "variant" | "color" | "size"> & {
  kind?: TAG_KIND;
  variant?: TAG_VARIANT;
};
