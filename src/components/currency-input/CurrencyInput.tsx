import { FormControl } from "../form-control";
import { INPUT_SIZE, Input } from "../input";
import { Select } from "../select";
import { CurrencyInputProps } from "./types";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { inputOverrides, selectOverrides } from "./overrides";
import { mapInputSizeToSelectSize } from "./utils";

const CurrencyInput = <Currency extends string = string>({
  value,
  onChange,
  currencies,
  className,
  label,
  disabled = false,
  caption,
  placeholder,
  overrides,
  size = INPUT_SIZE.medium,
  startEnhancer,
  error,
  required,
  kind,
}: CurrencyInputProps<Currency>) => {
  const mergedInputOverrides = getMergedOverrides(inputOverrides, overrides);

  return (
    <div className={className}>
      <FormControl label={label} caption={caption} error={error} required={required} size={size}>
        <Input
          startEnhancer={startEnhancer}
          disabled={disabled}
          overrides={mergedInputOverrides}
          placeholder={placeholder}
          type="number"
          value={value.amount}
          onChange={(e) => {
            onChange &&
              onChange({
                currency: value.currency,
                amount: e.currentTarget.value,
              });
          }}
          size={size}
          kind={kind}
          endEnhancer={
            <Select
              disabled={disabled}
              options={currencies.map((currency) => ({
                label: currency,
                id: currency,
              }))}
              searchable={false}
              overrides={selectOverrides}
              placeholder=""
              clearable={false}
              onChange={(params) => {
                onChange &&
                  onChange({
                    currency: params.value[0].label as Currency,
                    amount: value.amount,
                  });
              }}
              value={[
                {
                  label: value.currency,
                  id: value.currency,
                },
              ]}
              size={mapInputSizeToSelectSize(size)}
              error={error !== undefined}
            />
          }
        />
      </FormControl>
    </div>
  );
};

export default CurrencyInput;
