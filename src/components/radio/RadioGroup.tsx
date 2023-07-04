import { FC } from "react";
import { RadioGroup as BaseRadioGroup, RadioGroupProps as BaseRadioGroupProps, ALIGN } from "baseui/radio";

export type RadioGroupProps = BaseRadioGroupProps & {
  name: string;
};

const RadioGroup: FC<RadioGroupProps> = ({ ...props }) => {
  return <BaseRadioGroup {...props} />;
};

export { ALIGN };

export default RadioGroup;
