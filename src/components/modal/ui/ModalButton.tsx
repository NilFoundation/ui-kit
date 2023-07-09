import { FC } from "react";
import { useStyletron } from "baseui";
import { Button, BUTTON_KIND, BUTTON_SHAPE, BUTTON_SIZE } from "../../button";
import { modalButtonStyles } from "../styles";
import { ButtonProps } from "baseui/button";
export type ModalButtonProps = ButtonProps & {
  children?: any;
  kind?: BUTTON_KIND;
  size?: BUTTON_SIZE;
  shape?: BUTTON_SHAPE;
};
const ModalButton: FC<ModalButtonProps> = ({
  children,
  kind = BUTTON_KIND.primary,
  size = BUTTON_SIZE.default,
  shape = BUTTON_SHAPE.default,
  ...props
}) => {
  const [css] = useStyletron();
  return (
    <Button className={css(modalButtonStyles)} kind={kind} size={size} shape={shape} {...props}>
      {children}
    </Button>
  );
};

export default ModalButton;
