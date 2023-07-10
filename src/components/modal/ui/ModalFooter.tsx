import { FC, ReactNode } from "react";

export type ModalFooterProps = {
  children?: ReactNode;
};

const ModalFooter: FC<ModalFooterProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default ModalFooter;
