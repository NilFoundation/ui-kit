import { FC, useState, ChangeEventHandler } from "react";
import { RadioGroup as BaseRadioGroup, RadioGroupProps as BaseRadioGroupProps, ALIGN } from "baseui/radio";

export type RadioGroupProps = BaseRadioGroupProps & {
  name: string;
};

const RadioGroup: FC<RadioGroupProps> = ({ value: baseValue, onChange, ...props }) => {
  const [value, setValue] = useState<string | undefined>(baseValue);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
    onChange?.(event);
  };

  return <BaseRadioGroup {...props} value={value} onChange={onChangeHandler} />;
};

export { ALIGN };

export default RadioGroup;
