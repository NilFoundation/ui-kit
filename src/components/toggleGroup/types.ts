import type { XOR } from "ts-xor";
import { BUTTON_SIZE } from "../button";

export type ToggleGroupOption = {
  label: string;
  key: string;
  disabled?: boolean;
};

export type ToggleGroupBaseProps<O extends ToggleGroupOption> = {
  label?: string;
  options: O[] | Readonly<O[]>;
  onChange: (value: Array<O["key"]>) => void;
  className?: string;
  disabled?: boolean;
  size?: BUTTON_SIZE;
};

export type MultipleToggleGroupProps<O extends ToggleGroupOption> = {
  multiple: true;
  value: Array<O["key"]>;
} & ToggleGroupBaseProps<O>;

export type SingleToggleGroupProps<O extends ToggleGroupOption> = {
  multiple?: false;
  value: [O["key"]];
} & ToggleGroupBaseProps<O>;

export type ToggleGroupProps<O extends ToggleGroupOption> = XOR<MultipleToggleGroupProps<O>, SingleToggleGroupProps<O>>;
