import { FC } from "react";
import { Radio as BaseRadio, RadioProps as BaseRadioProps } from "baseui/radio";

export type RadioProps = BaseRadioProps;

const Radio: FC<RadioProps> = ({ ...props }) => {
  return <BaseRadio {...props} />;
};

export default Radio;
