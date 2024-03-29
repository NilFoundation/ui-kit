import React, { memo } from "react";
import SpinnerIcon from "./ui/SpinnerIcon";
import SpinnerBlock from "./ui/SpinnerBlock";
import { SPINNER_SIZE } from "./types";
import SpinnerLabel from "./ui/SpinnerLabel";

export type SpinnerProps = {
  size?: SPINNER_SIZE;
  label?: React.ReactNode;
  animation?: boolean;
  color?: string;
  className?: string;
};

const spinnerIconSize = {
  [SPINNER_SIZE.xSmall]: "12",
  [SPINNER_SIZE.small]: "16",
  [SPINNER_SIZE.medium]: "20",
  [SPINNER_SIZE.large]: "24",
  [SPINNER_SIZE.xLarge]: "32",
};

const Spinner: React.FC<SpinnerProps> = ({ size = SPINNER_SIZE.medium, color, animation, label, ...props }) => {
  return (
    <SpinnerBlock {...props}>
      <SpinnerIcon animation={animation} color={color} size={spinnerIconSize[size]} />
      {label && <SpinnerLabel size={size}>{label}</SpinnerLabel>}
    </SpinnerBlock>
  );
};

export default memo(Spinner);
