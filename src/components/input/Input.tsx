import { forwardRef } from "react";
import { Input as BaseInput, InputProps as BaseInputProps, Input as InputType } from "baseui/input";
import { getInputOverrides } from "./overrides";
import { INPUT_KIND, INPUT_SIZE } from "./types";
import { Spinner, SPINNER_SIZE } from "../spinner";
import { spinnerStyles } from "./styles";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type InputProps = Omit<BaseInputProps, "size" | "positive" | "error"> & {
  size?: INPUT_SIZE;
  kind?: INPUT_KIND;
  isLoading?: boolean;
};

const spinnerSize = {
  [INPUT_SIZE.small]: SPINNER_SIZE.small,
  [INPUT_SIZE.medium]: SPINNER_SIZE.medium,
} as const;

const Input = forwardRef<InputType, InputProps>(
  (
    { isLoading, endEnhancer, size = INPUT_SIZE.medium, kind = INPUT_KIND.primary, overrides: baseOverrides, ...props },
    ref
  ) => {
    const inputOverrides = getInputOverrides(size, kind);
    const overrides = getMergedOverrides(inputOverrides, baseOverrides);

    const EndEnhancer =
      endEnhancer || isLoading ? (
        <>
          {endEnhancer}
          {isLoading && <Spinner style={spinnerStyles} size={spinnerSize[size]} />}
        </>
      ) : null;

    return <BaseInput ref={ref} {...props} overrides={overrides} endEnhancer={EndEnhancer} />;
  }
);

Input.displayName = "Input";

export default Input;
