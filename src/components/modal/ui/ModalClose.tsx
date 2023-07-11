import React, { FC } from "react";
import { useStyletron } from "baseui";
import { CloseIcon } from "../../icons";
import { PRIMITIVE_COLORS } from "../../../shared";
import { StyleObject } from "styletron-react";

type DrawerCloseProps = {
  onBlur?: React.FocusEventHandler;
  onFocus?: React.FocusEventHandler;
  onClick?: React.MouseEventHandler;
};

const buttonStyles: StyleObject = {
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

const ModalClose: FC<DrawerCloseProps> = ({ ...props }) => {
  const [css] = useStyletron();

  return (
    <button {...props} className={css(buttonStyles)}>
      <CloseIcon size={24} color={PRIMITIVE_COLORS.white} />
    </button>
  );
};

export default ModalClose;
