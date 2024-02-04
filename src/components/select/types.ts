import { SelectProps as BaseSelectProps } from "baseui/select";

export enum SELECT_SIZE {
  small = "small",
  medium = "medium",
}

export enum SELECT_KIND {
  primary = "primary",
  secondary = "secondary",
}

export type SelectProps = Omit<BaseSelectProps, "size" | "positive" | "filterOutSelected" | "openOnClick"> & {
  size?: SELECT_SIZE;
  kind?: SELECT_KIND;
};
