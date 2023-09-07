import { FC } from "react";
import { useStyletron } from "baseui";
import { LabelSmall } from "baseui/typography";
import { expandProperty } from "inline-style-expand-shorthand";
import { PRIMITIVE_COLORS } from "../../shared";

export type AuthItemProps = {
  amount: string;
  cents?: string;
  currency: string;
};

const containerStyles = {
  ...expandProperty("padding", "16px"),
  ...expandProperty("borderTop", `1px solid ${PRIMITIVE_COLORS.gray100}`),
};

const wrapperStyles = {
  marginTop: "4px",
};

const labelStyles = {
  marginRight: "4px",
};

const AuthItem: FC<AuthItemProps> = ({ amount, cents, currency }) => {
  const [css] = useStyletron();

  return (
    <div className={css(containerStyles)}>
      <LabelSmall color={PRIMITIVE_COLORS.gray500}>Current balance</LabelSmall>
      <div className={css(wrapperStyles)}>
        <LabelSmall className={css(labelStyles)} as="span" color={PRIMITIVE_COLORS.gray800}>
          {amount}
        </LabelSmall>
        {cents && (
          <LabelSmall className={css(labelStyles)} as="span" color={PRIMITIVE_COLORS.gray500}>
            {cents}
          </LabelSmall>
        )}
        <LabelSmall as="span" color={PRIMITIVE_COLORS.gray800}>
          {currency}
        </LabelSmall>
      </div>
    </div>
  );
};

export default AuthItem;
