import { FormControlProps } from "../form-control";
import { InputProps } from "../input";

export type CurrencyInputProps<Currency extends string = string> = Pick<
  InputProps,
  "placeholder" | "disabled" | "overrides" | "size" | "startEnhancer" | "kind"
> &
  Pick<FormControlProps, "caption" | "label" | "error" | "required"> & {
    className?: string;
    value: { currency: Currency; amount: string };
    onChange?: (value: { currency: Currency; amount: string }) => void;
    currencies: Currency[];
  };
