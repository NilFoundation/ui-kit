import { FC, useRef } from "react";
import { Checkbox as BaseCheckbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { getCheckboxOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { CheckboxProps } from "./types";
import { TapArea } from "../../shared/ui/tap-area";

const Checkbox: FC<CheckboxProps> = ({
  labelPlacement = LABEL_PLACEMENT.right,
  overrides: baseOverrides,
  inputRef,
  ...props
}) => {
  const checkboxOverrides = getCheckboxOverrides();
  const overrides = getMergedOverrides(checkboxOverrides, baseOverrides);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const finalRef = inputRef || checkboxRef;

  return (
    <TapArea onClick={() => finalRef.current?.click()}>
      <BaseCheckbox
        {...props}
        overrides={overrides}
        labelPlacement={labelPlacement}
        checkmarkType="default"
        inputRef={finalRef}
      />
    </TapArea>
  );
};

export { LABEL_PLACEMENT };
export default Checkbox;
