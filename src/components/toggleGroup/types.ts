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
  className?: string;
  disabled?: boolean;
  size?: BUTTON_SIZE;
};

export type MultipleToggleGroupProps<O extends ToggleGroupOption> = {
  multiple: true;
  value: Array<O["key"]>;
  onChange: (value: [O["key"]]) => void;
} & ToggleGroupBaseProps<O>;

export type SingleToggleGroupProps<O extends ToggleGroupOption> = {
  multiple?: false;
  value: [O["key"]];
  onChange: (value: Array<O["key"]>) => void;
} & ToggleGroupBaseProps<O>;

export type ToggleGroupProps<O extends ToggleGroupOption> = XOR<MultipleToggleGroupProps<O>, SingleToggleGroupProps<O>>;
