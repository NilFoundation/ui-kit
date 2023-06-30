import { FC } from "react";
import { Radio as BaseRadio, RadioProps as BaseRadioProps } from "baseui/radio";
import { getRadioOverrides } from "./overrides";

export type RadioProps = BaseRadioProps;

const Radio: FC<RadioProps> = ({ ...props }) => {
  const overrides = getRadioOverrides();

  return <BaseRadio {...props} overrides={overrides} />;
};

export default Radio;
