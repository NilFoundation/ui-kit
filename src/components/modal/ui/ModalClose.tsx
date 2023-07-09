import React, { FC } from "react";
import { useStyletron } from "baseui";
import { CloseIcon } from "../../icons";
import { PRIMITIVE_COLORS } from "../../../shared";

type DrawerCloseProps = {
  onBlur?: React.FocusEventHandler;
  onFocus?: React.FocusEventHandler;
  onClick?: React.MouseEventHandler;
};

const buttonStyles = {
  position: "absolute",
  top: "8px",
  right: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "24px",
  height: "24px",
  padding: "0",
  background: "none",
  border: "none",
  outline: "none",
  cursor: "pointer",
};

const ModalClose: FC<DrawerCloseProps> = ({ onClick, onFocus, onBlur }) => {
  const [css] = useStyletron();

  return (
    // @ts-ignore
    <button onClick={onClick} onFocus={onFocus} onBlur={onBlur} className={css(buttonStyles)}>
      <CloseIcon size={24} color={PRIMITIVE_COLORS.white} />
    </button>
  );
};

export default ModalClose;
