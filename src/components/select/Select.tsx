import React from "react";
import { Select as BaseSelect, SelectProps as BaseSelectProps, SIZE } from "baseui/select";
import { getSelectOverrides } from "./overrides";
import { SELECT_KIND, SELECT_SIZE } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type SelectProps = Omit<BaseSelectProps, "size" | "positive"> & {
  size?: SELECT_SIZE;
  kind?: SELECT_KIND;
};

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

  return <BaseSelect {...props} valueKey={valueKey} value={value} disabled={disabled} overrides={overrides} />;
};

export { SIZE };

export default Select;
