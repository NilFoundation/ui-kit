import { FC } from "react";
import { Radio as BaseRadio, RadioProps as BaseRadioProps } from "baseui/radio";
import { getRadioOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type RadioProps = BaseRadioProps;

const Radio: FC<RadioProps> = ({ overrides: baseOverrides, ...props }) => {
  const radioOverrides = getRadioOverrides();
  const overrides = getMergedOverrides(radioOverrides, baseOverrides);

  return <BaseRadio overrides={overrides} {...props} />;
};

export default Radio;
