import { FC } from "react";
import { useStyletron } from "baseui";
import { LoginIcon } from "../../icons";
import { COLORS } from "../../../shared";
import { LabelSmall } from "baseui/typography";
import { Button, BUTTON_SIZE } from "../../button";

type LoginBlockProps = {
  onClick?: () => void;
};

const LoginBlock: FC<LoginBlockProps> = ({ onClick }) => {
  const [css] = useStyletron();

  return (
    <Button onClick={onClick} size={BUTTON_SIZE.mini}>
      <LoginIcon color={COLORS.gray800} />
      <LabelSmall
        className={css({
          marginLeft: "8px",
        })}
        color={COLORS.gray800}
      >
        Sign in
      </LabelSmall>
    </Button>
  );
};

export default LoginBlock;
