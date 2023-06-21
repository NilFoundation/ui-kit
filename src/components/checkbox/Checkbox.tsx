import { FC, ChangeEventHandler, useState } from "react";
import {
  Checkbox as BaseCheckbox,
  CheckboxProps as BaseCheckboxProps,
  LABEL_PLACEMENT,
  STYLE_TYPE,
} from "baseui/checkbox";
import { checkboxOverrides } from "./overrides";

export type CheckboxProps = BaseCheckboxProps;

const Checkbox: FC<CheckboxProps> = ({
  checked: baseChecked,
  onChange,
  labelPlacement = LABEL_PLACEMENT.right,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean | undefined>(baseChecked);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event);
    setChecked(event.target.checked);
  };

  return (
    <BaseCheckbox
      {...props}
      overrides={checkboxOverrides}
      checked={checked}
      onChange={onChangeHandler}
      labelPlacement={labelPlacement}
    />
  );
};

export { LABEL_PLACEMENT, STYLE_TYPE };
export default Checkbox;
