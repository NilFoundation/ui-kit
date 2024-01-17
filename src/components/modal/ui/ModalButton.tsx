import { FC } from "react";
import { useStyletron } from "baseui";
import { Button, BUTTON_KIND, BUTTON_SIZE, RegularButtonProps } from "../../button";
import { modalButtonStyles } from "../styles";

export type ModalButtonProps = RegularButtonProps;

const ModalButton: FC<ModalButtonProps> = ({
  children,
  kind = BUTTON_KIND.primary,
  size = BUTTON_SIZE.default,
  ...props
}) => {
  const [css] = useStyletron();
  return (
    <Button {...props} className={css(modalButtonStyles)} kind={kind} size={size}>
      {children}
    </Button>
  );
};

export default ModalButton;
