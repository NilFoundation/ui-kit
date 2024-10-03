import { FC, cloneElement } from "react";
import { FormControl as BaseFormControl, FormControlProps as BaseFormControlProps } from "baseui/form-control";
import { INPUT_SIZE } from "../input";
import { getFormControlOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export interface ICounter {
  maxLength: number;
  length: number;
}

export type FormControlProps = Omit<BaseFormControlProps, "counter" | "positive"> & {
  size?: INPUT_SIZE;
  readOnly?: boolean;
  isLoading?: boolean;
  counter?: ICounter;
  required?: boolean;
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
  required,
  overrides: baseOverrides,
  ...props
}) => {
  const formControlOverrides = getFormControlOverrides(
    size,
    !!readOnly,
    counter ? getValueLabel(counter) : undefined,
    required
  );
  const overrides = getMergedOverrides(formControlOverrides, baseOverrides);

  return (
    <BaseFormControl {...props} overrides={overrides}>
      {/*@ts-ignore*/}
      {cloneElement(children, {
        size,
        readOnly,
        isLoading,
        maxLength: counter ? counter.maxLength : undefined,
      })}
    </BaseFormControl>
  );
};

export default FormControl;
