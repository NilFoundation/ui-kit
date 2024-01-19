import { FC } from "react";
import { Checkbox as BaseCheckbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { getToggleOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { ToggleProps } from "./types";

const Toggle: FC<ToggleProps> = ({
  labelPlacement = LABEL_PLACEMENT.right,
  overrides: baseOverrides,
  disabled,
  ...props
}) => {
  const checkboxOverrides = getToggleOverrides(disabled);
  const overrides = getMergedOverrides(checkboxOverrides, baseOverrides);

  return (
    <BaseCheckbox
      {...props}
      disabled={disabled}
      overrides={overrides}
      labelPlacement={labelPlacement}
      checkmarkType="toggle"
    />
  );
};

export { LABEL_PLACEMENT };
export default Toggle;
