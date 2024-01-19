import { CheckboxProps as BaseCheckboxProps } from "baseui/checkbox";

export type ToggleProps = Omit<BaseCheckboxProps, "checkmarkType" | "error" | "isIndeterminate">;
