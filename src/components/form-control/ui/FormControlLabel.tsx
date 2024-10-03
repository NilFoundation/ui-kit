import { ComponentProps, FC, ReactNode } from "react";
import { INPUT_SIZE } from "../../input";
import { LabelMedium, LabelSmall } from "baseui/typography";
import { COLORS } from "../../../shared";
import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

type FormControlLabelProps = {
  children?: ReactNode;
  isDisabled?: boolean;
  valueLabel?: string;
  size: INPUT_SIZE;
  required?: boolean;
};

type TypographyProps = ComponentProps<typeof LabelSmall>;

const labelComponent = {
  [INPUT_SIZE.small]: (props: TypographyProps) => <LabelSmall {...props} />,
  [INPUT_SIZE.medium]: (props: TypographyProps) => <LabelMedium {...props} />,
};

const containerStyles: StyleObject = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1ch",
  width: "100%",
};

const FormControlLabel: FC<FormControlLabelProps> = ({
  valueLabel,
  isDisabled,
  size,
  children,
  required,
  ...props
}) => {
  const [css] = useStyletron();
  const LabelComponent = labelComponent[size];

  const labelColor = isDisabled ? COLORS.gray300 : COLORS.gray50;

  return (
    <div className={css(containerStyles)}>
      <LabelComponent color={labelColor} {...props}>
        {children}
      </LabelComponent>
      {valueLabel && <LabelComponent color={COLORS.gray300}>{valueLabel}</LabelComponent>}
      {required && <LabelComponent color={COLORS.red400}>*</LabelComponent>}
    </div>
  );
};

export default FormControlLabel;
