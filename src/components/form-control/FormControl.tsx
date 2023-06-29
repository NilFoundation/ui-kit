import React, { FC } from "react";
import { FormControl as BaseFormControl, FormControlProps as BaseFormControlProps } from "baseui/form-control";
import { INPUT_SIZE } from "../input";
import { getFormControlOverrides } from "./overrides";

interface ICounter {
  maxLength: number;
  length: number;
}

export type FormControlProps = Omit<BaseFormControlProps, "counter"> & {
  size?: INPUT_SIZE;
  readOnly?: boolean;
  isLoading?: boolean;
  counter?: ICounter;
};

const getValueLabel = (counter: ICounter): string => {
  return `${counter.length}/${counter.maxLength}`;
};

const FormControl: FC<FormControlProps> = ({
  isLoading,
  readOnly,
  size = INPUT_SIZE.medium,
  children,
  counter,
  ...props
}) => {
  const overrides = getFormControlOverrides(size, !!readOnly, counter ? getValueLabel(counter) : undefined);

  return (
    <BaseFormControl {...props} overrides={overrides}>
      {/*@ts-ignore*/}
      {React.cloneElement(children, {
        size,
        readOnly,
        isLoading,
        maxLength: counter ? counter.maxLength : undefined,
      })}
    </BaseFormControl>
  );
};

export default FormControl;
