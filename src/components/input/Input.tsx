import { forwardRef } from "react";
import { Input as BaseInput, InputProps as BaseInputProps, Input as InputType, SIZE } from "baseui/input";
import { getInputOverrides } from "./overrides";
import { INPUT_SIZE } from "./types";
import { Spinner, SPINNER_SIZE } from "../spinner";
import { useStyletron } from "baseui";
import { spinnerStyles } from "./styles";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type InputProps = Omit<BaseInputProps, "size" | "positive"> & {
  size?: INPUT_SIZE;
  isLoading?: boolean;
};

const spinnerSize = {
  [INPUT_SIZE.small]: SPINNER_SIZE.small,
  [INPUT_SIZE.medium]: SPINNER_SIZE.medium,
  [INPUT_SIZE.large]: SPINNER_SIZE.large,
} as const;

const Input = forwardRef<InputType, InputProps>(
  ({ isLoading, endEnhancer, size = INPUT_SIZE.medium, overrides: baseOverrides, ...props }, ref) => {
    const [css] = useStyletron();

    const inputOverrides = getInputOverrides(size);
    const overrides = getMergedOverrides(inputOverrides, baseOverrides);

    const EndEnhancer =
      endEnhancer || isLoading ? (
        <>
          {endEnhancer}
          {isLoading && <Spinner animation className={css(spinnerStyles)} size={spinnerSize[size]} />}
        </>
      ) : null;

    return <BaseInput ref={ref} {...props} overrides={overrides} endEnhancer={EndEnhancer} />;
  }
);

Input.displayName = "Input";

export { SIZE };
export default Input;
