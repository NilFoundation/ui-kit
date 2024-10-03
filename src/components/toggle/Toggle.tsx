import { FC, useRef } from "react";
import { Checkbox as BaseCheckbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { getToggleOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { ToggleProps } from "./types";
import { TapArea } from "../../shared/ui/tap-area";

const Toggle: FC<ToggleProps> = ({
  labelPlacement = LABEL_PLACEMENT.right,
  overrides: baseOverrides,
  disabled,
  inputRef,
  ...props
}) => {
  const checkboxOverrides = getToggleOverrides(disabled);
  const overrides = getMergedOverrides(checkboxOverrides, baseOverrides);
  const toggleRef = useRef<HTMLInputElement>(null);
  const finalRef = inputRef || toggleRef;

  return (
    <TapArea onClick={() => finalRef.current?.click()}>
      <BaseCheckbox
        {...props}
        overrides={overrides}
        inputRef={finalRef}
        labelPlacement={labelPlacement}
        checkmarkType="toggle"
      />
    </TapArea>
  );
};

export { LABEL_PLACEMENT };
export default Toggle;
