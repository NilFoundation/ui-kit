import { ChangeEventHandler, FC, useState } from "react";
import RadioGroup, { RadioGroupProps } from "../RadioGroup";

const RadioGroupStoryWidget: FC<RadioGroupProps> = ({ value: baseValue, ...props }) => {
  const [value, setValue] = useState<string | undefined>(baseValue);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return <RadioGroup {...props} value={value} onChange={onChangeHandler} />;
};

export default RadioGroupStoryWidget;
