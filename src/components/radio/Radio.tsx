import { FC, useRef } from "react";
import { Radio as BaseRadio, RadioProps as BaseRadioProps } from "baseui/radio";
import { getRadioOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { TapArea } from "../../shared/ui/tap-area";

export type RadioProps = BaseRadioProps;

const Radio: FC<RadioProps> = ({ overrides: baseOverrides, inputRef, ...props }) => {
  const radioOverrides = getRadioOverrides();
  const overrides = getMergedOverrides(radioOverrides, baseOverrides);
  const radioRef = useRef<HTMLInputElement>(null);
  const finalRef = inputRef || radioRef;

  return (
    <TapArea onClick={() => finalRef.current?.click()}>
      <BaseRadio overrides={overrides} inputRef={finalRef} {...props} />
    </TapArea>
  );
};

export default Radio;
