import { FC } from "react";
import { useStyletron } from "baseui";
import { CloseIcon } from "../../icons";
import { StyleObject } from "styletron-react";
import { ButtonIcon, ButtonIconProps } from "../../button-icon";
import { BUTTON_KIND } from "../../button";

type ModalCloseProps = Omit<ButtonIconProps, "icon" | "kind">;

const buttonStyles: StyleObject = {
  position: "absolute",
  top: "24px",
  right: "24px",
};

const ModalClose: FC<ModalCloseProps> = ({ ...props }) => {
  const [css] = useStyletron();

  return <ButtonIcon className={css(buttonStyles)} icon={<CloseIcon />} kind={BUTTON_KIND.secondary} {...props} />;
};

export default ModalClose;
