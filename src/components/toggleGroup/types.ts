import type { XOR } from "ts-xor";
import { BUTTON_SIZE } from "../button";

export type ToggleGroupOption = {
  label: string;
  key: string;
  disabled?: boolean;
};

export type ToggleGroupBaseProps = {
  label?: string;
  options: ToggleGroupOption[];
  onToggle: (selectedOptions: ToggleGroupOption[]) => void;
  className?: string;
  disabled?: boolean;
  size?: BUTTON_SIZE;
};

export type MultipleToggleGroupProps = {
  multiple: true;
  selectedOptions: ToggleGroupOption[];
} & ToggleGroupBaseProps;

export type SingleToggleGroupProps = {
  multiple?: false;
  selectedOptions: [ToggleGroupOption];
} & ToggleGroupBaseProps;

export type ToggleGroupProps = XOR<MultipleToggleGroupProps, SingleToggleGroupProps>;
