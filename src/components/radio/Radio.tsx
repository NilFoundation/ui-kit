import { FC } from "react";
import { Radio as BaseRadio, RadioProps as BaseRadioProps } from "baseui/radio";
import { getRadioOverrides } from "./overrides";

export type RadioProps = BaseRadioProps;

const Radio: FC<RadioProps> = ({ ...props }) => {
  const { checked, error, disabled } = props;

  const overrides = getRadioOverrides(checked, disabled, error);

  return <BaseRadio overrides={overrides} {...props} />;
};

export default Radio;
