import { FC } from "react";
import { useStyletron } from "baseui";
import { Button, ButtonProps, BUTTON_KIND, BUTTON_SHAPE, BUTTON_SIZE } from "../../button";
import { modalButtonStyles } from "../styles";

export type ModalButtonProps = ButtonProps;

const ModalButton: FC<ModalButtonProps> = ({
  children,
  kind = BUTTON_KIND.gray,
  size = BUTTON_SIZE.default,
  shape = BUTTON_SHAPE.default,
  ...props
}) => {
  const [css] = useStyletron();
  return (
    <Button {...props} className={css(modalButtonStyles)} kind={kind} size={size} shape={shape}>
      {children}
    </Button>
  );
};

export default ModalButton;
