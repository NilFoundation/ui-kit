import { FC, ChangeEventHandler, useState, useEffect } from "react";
import {
  Checkbox as BaseCheckbox,
  CheckboxProps as BaseCheckboxProps,
  LABEL_PLACEMENT,
  STYLE_TYPE,
} from "baseui/checkbox";
import { getCheckboxOverrides } from "./overrides";

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

  useEffect(() => {
    setChecked(baseChecked);
  }, [baseChecked]);

  const overrides = getCheckboxOverrides();

  return (
    <BaseCheckbox
      {...props}
      overrides={overrides}
      checked={checked}
      onChange={onChangeHandler}
      labelPlacement={labelPlacement}
    />
  );
};

export { LABEL_PLACEMENT, STYLE_TYPE };
export default Checkbox;
