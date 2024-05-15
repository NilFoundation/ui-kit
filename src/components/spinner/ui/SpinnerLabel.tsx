import React, { FC, ComponentProps } from "react";
import { SPINNER_KIND, SPINNER_SIZE } from "../types";
import { LabelXSmall, LabelSmall, LabelMedium, LabelLarge, HeadingXSmall } from "baseui/typography";
import { StyleObject } from "styletron-react";
import { useStyletron } from "baseui";
import { COLORS } from "../../../shared";

type SpinnerLabelProps = {
  size?: SPINNER_SIZE;
  children?: React.ReactNode;
  kind: SPINNER_KIND;
};

type TypographyProps = ComponentProps<typeof LabelXSmall>;

const labelStyles: StyleObject = {
  marginTop: "8px",
};

const SpinnerLabelColorrMap = {
  [SPINNER_KIND.light]: COLORS.gray50,
  [SPINNER_KIND.dark]: COLORS.gray900,
} as const;

const spinnerLabelComponent = {
  [SPINNER_SIZE.xSmall]: (props: TypographyProps) => <LabelXSmall as="span" {...props} />,
  [SPINNER_SIZE.small]: (props: TypographyProps) => <LabelSmall as="span" {...props} />,
  [SPINNER_SIZE.medium]: (props: TypographyProps) => <LabelMedium as="span" {...props} />,
  [SPINNER_SIZE.large]: (props: TypographyProps) => <LabelLarge as="span" {...props} />,
  [SPINNER_SIZE.xLarge]: (props: TypographyProps) => <HeadingXSmall as="span" {...props} />,
};

const SpinnerLabel: FC<SpinnerLabelProps> = ({ size = SPINNER_SIZE.medium, kind, children }) => {
  const [css] = useStyletron();
  const TypographyComponent = spinnerLabelComponent[size];
  const color = SpinnerLabelColorrMap[kind];

  return (
    <TypographyComponent color={color} className={css(labelStyles)}>
      {children}
    </TypographyComponent>
  );
};

export default SpinnerLabel;
