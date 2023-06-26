import React, { FC, useState } from "react";
import { FormControl as BaseFormControl, FormControlProps as BaseFormControlProps } from "baseui/form-control";
import { INPUT_SIZE } from "../input";
import { getFormControlOverrides } from "./overrides";

export type FormControlProps = BaseFormControlProps & {
  size?: INPUT_SIZE;
  readOnly?: boolean;
  maxLength?: number;
  isLoading?: boolean;
};

const getValueLabel = (value: string, maxLength: number): string => {
  return `${value.length}/${maxLength}`;
};

const FormControl: FC<FormControlProps> = ({
  isLoading,
  maxLength,
  readOnly,
  size = INPUT_SIZE.medium,
  children,
  ...props
}) => {
  const [value, setValue] = useState("");

  const onValueChangeHandler = (data: string | any) => {
    if (typeof data === "string") {
      setValue(data);
    }
  };

  const overrides = getFormControlOverrides(size, !!readOnly, maxLength ? getValueLabel(value, maxLength) : undefined);

  return (
    <BaseFormControl {...props} overrides={overrides}>
      {/*@ts-ignore*/}
      {React.cloneElement(children, {
        size,
        readOnly,
        maxLength,
        isLoading,
        onValueChange: onValueChangeHandler,
      })}
    </BaseFormControl>
  );
};

export default FormControl;
