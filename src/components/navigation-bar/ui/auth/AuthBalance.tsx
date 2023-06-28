import { FC } from "react";
import { useStyletron } from "baseui";
import { PRIMITIVE_COLORS } from "../../../../shared";
import { LabelSmall } from "baseui/typography";
import { expandProperty } from "inline-style-expand-shorthand";

export type AuthBalanceProps = {
  amount: string;
  coin?: string;
  currency: string;
};

const containerStyles = {
  ...expandProperty("padding", "16px"),
  ...expandProperty("borderTop", `1px solid ${PRIMITIVE_COLORS.primary100}`),
};

const wrapperStyles = {
  marginTop: "4px",
};

const labelStyles = {
  marginRight: "4px",
};

const AuthBalance: FC<AuthBalanceProps> = ({ amount, coin, currency }) => {
  const [css] = useStyletron();

  return (
    <div className={css(containerStyles)}>
      <LabelSmall color={PRIMITIVE_COLORS.primary500}>Current balance</LabelSmall>
      <div className={css(wrapperStyles)}>
        <LabelSmall className={css(labelStyles)} as="span" color={PRIMITIVE_COLORS.primary800}>
          {amount}
        </LabelSmall>
        {coin && (
          <LabelSmall className={css(labelStyles)} as="span" color={PRIMITIVE_COLORS.primary500}>
            {coin}
          </LabelSmall>
        )}
        <LabelSmall as="span" color={PRIMITIVE_COLORS.primary800}>
          {currency}
        </LabelSmall>
      </div>
    </div>
  );
};

export default AuthBalance;
