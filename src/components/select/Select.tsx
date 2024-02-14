import React from "react";
import { Select as BaseSelect, SIZE } from "baseui/select";
import { getSelectOverrides } from "./overrides";
import { SELECT_KIND, SELECT_SIZE, SelectProps } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import SelectContext from "./SelectContext";
import { useControlRef } from "./useControlRef";

const Select: React.FC<SelectProps> = ({
  value,
  disabled,
  size = SELECT_SIZE.medium,
  kind = SELECT_KIND.primary,
  valueKey,
  overrides: baseOverrides,
  controlRef: controlRefFromProps,
  ...props
}) => {
  const selectOverrides = getSelectOverrides(size, kind, value, valueKey);
  const overrides = getMergedOverrides(selectOverrides, baseOverrides);
  const controlRef = useControlRef(controlRefFromProps);

  return (
    <SelectContext.Provider value={{ value, controlRef }}>
      <BaseSelect
        {...props}
        valueKey={valueKey}
        value={value}
        disabled={disabled}
        overrides={overrides}
        filterOutSelected={false}
        controlRef={controlRef}
      />
    </SelectContext.Provider>
  );
};

export { SIZE };

export default Select;
