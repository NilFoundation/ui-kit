import { ComponentProps, FC, ReactNode } from "react";
import { INPUT_SIZE } from "../../input";
import { LabelLarge, LabelMedium, LabelSmall } from "baseui/typography";
import { PRIMITIVE_COLORS } from "../../../shared";
import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

type FormControlLabelProps = {
  children?: ReactNode;
  isDisabled?: boolean;
  valueLabel?: string;
  size: INPUT_SIZE;
};

type TypographyProps = ComponentProps<typeof LabelSmall>;

const labelComponent = {
  [INPUT_SIZE.small]: (props: TypographyProps) => <LabelSmall {...props} />,
  [INPUT_SIZE.medium]: (props: TypographyProps) => <LabelMedium {...props} />,
  [INPUT_SIZE.large]: (props: TypographyProps) => <LabelLarge {...props} />,
};

const containerStyles: StyleObject = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
};

const FormControlLabel: FC<FormControlLabelProps> = ({ valueLabel, isDisabled, size, children, ...props }) => {
  const [css] = useStyletron();
  const LabelComponent = labelComponent[size];

  const labelColor = isDisabled ? PRIMITIVE_COLORS.gray300 : PRIMITIVE_COLORS.white;

  return (
    <div className={css(containerStyles)}>
      <LabelComponent color={labelColor} {...props}>
        {children}
      </LabelComponent>
      {valueLabel && <LabelComponent color={PRIMITIVE_COLORS.gray300}>{valueLabel}</LabelComponent>}
    </div>
  );
};

export default FormControlLabel;
