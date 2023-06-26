import { FC } from "react";
import { Checkbox as BaseCheckbox, CheckboxProps as BaseCheckboxProps, LABEL_PLACEMENT } from "baseui/checkbox";
import { getCheckboxOverrides } from "./overrides";

export type CheckboxProps = BaseCheckboxProps;

const Checkbox: FC<CheckboxProps> = ({ labelPlacement = LABEL_PLACEMENT.right, ...props }) => {
  const overrides = getCheckboxOverrides();

  return <BaseCheckbox {...props} overrides={overrides} labelPlacement={labelPlacement} />;
};

export { LABEL_PLACEMENT };
export default Checkbox;
