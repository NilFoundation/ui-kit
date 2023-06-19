import { FC, memo } from "react";
import { Spinner, SPINNER_SIZE } from "../../spinner";
import { SELECT_SIZE } from "../types";

type SelectSpinnerProps = {
  size: SELECT_SIZE;
};

const spinnerSize = {
  [SELECT_SIZE.small]: SPINNER_SIZE.small,
  [SELECT_SIZE.medium]: SPINNER_SIZE.medium,
  [SELECT_SIZE.large]: SPINNER_SIZE.large,
};

const SelectSpinner: FC<SelectSpinnerProps> = ({ size }) => {
  return <Spinner size={spinnerSize[size]} />;
};

export default memo(SelectSpinner);
