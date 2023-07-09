import { FC, ReactNode } from "react";
import { ModalFooter as BaseModalFooter } from "baseui/modal";
import { useStyletron } from "baseui";
import { modalFooterStyles } from "../styles";

export type ModalFooterProps = {
  children?: ReactNode;
};

const ModalFooter: FC<ModalFooterProps> = ({ children }) => {
  const [css] = useStyletron();
  return <BaseModalFooter className={css(modalFooterStyles)}>{children}</BaseModalFooter>;
};

export default ModalFooter;
