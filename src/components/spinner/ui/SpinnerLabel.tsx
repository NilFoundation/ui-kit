import React, { FC, ComponentProps } from "react";
import { SPINNER_SIZE } from "../types";
import { LabelXSmall, LabelSmall, LabelMedium, LabelLarge, HeadingXSmall } from "baseui/typography";
import { StyleObject } from "styletron-react";
import { useStyletron } from "baseui";

type SpinnerLabelProps = {
  size?: SPINNER_SIZE;
  children?: React.ReactNode;
};

type TypographyProps = ComponentProps<typeof LabelXSmall>;

const labelStyles: StyleObject = {
  marginTop: "8px",
};

const spinnerLabelComponent = {
  [SPINNER_SIZE.xSmall]: (props: TypographyProps) => <LabelXSmall color="gray500" as="span" {...props} />,
  [SPINNER_SIZE.small]: (props: TypographyProps) => <LabelSmall color="gray500" as="span" {...props} />,
  [SPINNER_SIZE.medium]: (props: TypographyProps) => <LabelMedium color="gray500" as="span" {...props} />,
  [SPINNER_SIZE.large]: (props: TypographyProps) => <LabelLarge color="gray500" as="span" {...props} />,
  [SPINNER_SIZE.xLarge]: (props: TypographyProps) => <HeadingXSmall color="gray500" as="span" {...props} />,
};

const SpinnerLabel: FC<SpinnerLabelProps> = ({ size = SPINNER_SIZE.medium, children }) => {
  const [css] = useStyletron();
  const TypographyComponent = spinnerLabelComponent[size];

  return (
    <>
      <TypographyComponent className={css(labelStyles)}>{children}</TypographyComponent>
    </>
  );
};

export default SpinnerLabel;
