import React from "react";
import { Select as BaseSelect, SIZE } from "baseui/select";
import { getSelectOverrides } from "./overrides";
import { SELECT_KIND, SELECT_SIZE, SelectProps } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import ValueContext from "./ValueContext";

const Select: React.FC<SelectProps> = ({
  value,
  disabled,
  size = SELECT_SIZE.medium,
  kind = SELECT_KIND.primary,
  valueKey,
  overrides: baseOverrides,
  ...props
}) => {
  const selectOverrides = getSelectOverrides(size, !!disabled, kind, value, valueKey);
  const overrides = getMergedOverrides(selectOverrides, baseOverrides);

  return (
    <ValueContext.Provider value={{ value }}>
      <BaseSelect
        {...props}
        valueKey={valueKey}
        value={value}
        disabled={disabled}
        overrides={overrides}
        filterOutSelected={false}
      />
    </ValueContext.Provider>
  );
};

export { SIZE };

export default Select;
