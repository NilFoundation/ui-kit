import { FC } from "react";
import { Checkbox as BaseCheckbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { getCheckboxOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { CheckboxProps } from "./types";

const Checkbox: FC<CheckboxProps> = ({
  labelPlacement = LABEL_PLACEMENT.right,
  overrides: baseOverrides,
  ...props
}) => {
  const checkboxOverrides = getCheckboxOverrides();
  const overrides = getMergedOverrides(checkboxOverrides, baseOverrides);

  return <BaseCheckbox {...props} overrides={overrides} labelPlacement={labelPlacement} />;
};

export { LABEL_PLACEMENT };
export default Checkbox;
