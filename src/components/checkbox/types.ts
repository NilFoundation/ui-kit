import { CheckboxProps as BaseCheckboxProps } from "baseui/checkbox";

export type CheckboxProps = Omit<BaseCheckboxProps, "checkmarkType" | "error">;
