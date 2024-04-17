import { ProgressBarProps as BaseProgressBarProps } from "baseui/progress-bar";

export enum PROGRESS_BAR_SIZE {
  small = "small",
  medium = "medium",
  large = "large",
}

export type ProgressBarProps = Omit<
  BaseProgressBarProps,
  "steps" | "size" | "showLabel" | "successValue" | "getProgressLabel" | "infinite"
> & {
  size?: PROGRESS_BAR_SIZE;
  className?: string;
  showLabel?: boolean;
  getProgressLabel?: (value: number, minValue: number, maxValue: number) => string;
  infinite?: boolean;
};
