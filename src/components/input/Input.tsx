import React from "react";
import { Input as BaseInput, InputProps as BaseInputProps, SIZE } from "baseui/input";
import { getInputOverrides } from "./overrides";
import { INPUT_SIZE } from "./types";
import { Spinner, SPINNER_SIZE } from "../spinner";
import { useStyletron } from "baseui";
import { spinnerStyles } from "./styles";

export type InputProps = BaseInputProps & {
  size?: INPUT_SIZE;
  isLoading?: boolean;
};

const spinnerSize = {
  [INPUT_SIZE.small]: SPINNER_SIZE.small,
  [INPUT_SIZE.medium]: SPINNER_SIZE.medium,
  [INPUT_SIZE.large]: SPINNER_SIZE.large,
};

const Input: React.FC<InputProps> = ({ isLoading, endEnhancer, size = INPUT_SIZE.medium, ...props }) => {
  const [css] = useStyletron();

  const overrides = getInputOverrides(size);

  const EndEnhancer =
    endEnhancer || isLoading ? (
      <>
        {endEnhancer}
        {isLoading && <Spinner animation className={css(spinnerStyles)} size={spinnerSize[size]} />}
      </>
    ) : null;

  return <BaseInput {...props} overrides={overrides} endEnhancer={EndEnhancer} />;
};

export { SIZE };
export default Input;
