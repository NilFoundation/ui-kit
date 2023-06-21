import React, { useState } from "react";
import { Select as BaseSelect, SelectProps as BaseSelectProps, Value, OnChangeParams, SIZE } from "baseui/select";

export type SelectProps = BaseSelectProps & {
  placeholder: React.ReactNode;
  onChange?: (value: Value) => void;
};

const Select: React.FC<SelectProps> = ({ value: baseValue, onChange, ...props }) => {
  const [value, setValue] = useState<Value | undefined>(baseValue);

  const onChangeHandler = (params: OnChangeParams) => {
    setValue(params.value);
    onChange?.(params.value);
  };

  return <BaseSelect {...props} value={value} onChange={onChangeHandler} />;
};

export { SIZE };

export default Select;
