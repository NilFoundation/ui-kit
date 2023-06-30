import React from "react";
import { Select as BaseSelect, SelectProps as BaseSelectProps, Value, SIZE } from "baseui/select";
import { getSelectOverrides } from "./overrides";
import { SELECT_SIZE } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type SelectProps = BaseSelectProps & {
  placeholder: React.ReactNode;
  onChange?: (value: Value) => void;
  size?: SELECT_SIZE;
  startEnhancer?: React.ReactNode;
};

const Select: React.FC<SelectProps> = ({
  value,
  disabled,
  size = SELECT_SIZE.medium,
  valueKey,
  overrides: baseOverrides,
  ...props
}) => {
  const selectOverrides = getSelectOverrides(size, !!disabled, value, valueKey);
  const overrides = getMergedOverrides(selectOverrides, baseOverrides);

  return <BaseSelect {...props} valueKey={valueKey} value={value} disabled={disabled} overrides={overrides} />;
};

export { SIZE };

export default Select;
