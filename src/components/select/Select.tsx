import React, { useState } from "react";
import { Select as BaseSelect, SelectProps as BaseSelectProps, Value, OnChangeParams, SIZE } from "baseui/select";
import { getSelectOverrides } from "./overrides";
import { SELECT_SIZE } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type SelectProps = Omit<BaseSelectProps, "size"> & {
  placeholder: React.ReactNode;
  onChange?: (value: Value) => void;
  size?: SELECT_SIZE;
  startEnhancer?: React.ReactNode;
};

const Select: React.FC<SelectProps> = ({
  value: baseValue,
  disabled,
  size = SELECT_SIZE.medium,
  onChange,
  overrides: baseOverrides,
  ...props
}) => {
  const [value, setValue] = useState<Value | undefined>(baseValue);

  const onChangeHandler = (params: OnChangeParams) => {
    setValue(params.value);
    onChange?.(params.value);
  };

  const selectOverrides = getSelectOverrides(size, !!disabled);
  const overrides = getMergedOverrides(selectOverrides, baseOverrides);

  return <BaseSelect {...props} disabled={disabled} value={value} onChange={onChangeHandler} overrides={overrides} />;
};

export { SIZE };

export default Select;
