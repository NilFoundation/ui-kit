import React, { useState } from "react";
import { Input as BaseInput, InputProps as BaseInputProps, SIZE } from "baseui/input";

export type InputProps = BaseInputProps;

type TInputValue = string | number | undefined;

const Input: React.FC<InputProps> = ({ value: baseValue, onChange, ...props }) => {
  const [value, setValue] = useState<TInputValue>(baseValue);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
    onChange?.(event);
  };

  return <BaseInput {...props} value={value} onChange={onChangeHandler} />;
};

export { SIZE };
export default Input;
