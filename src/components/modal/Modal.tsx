import { FC } from "react";
import { Modal as BaseModal, ModalProps as BaseModalProps, ROLE } from "baseui/modal";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";
import { getModalOverrides } from "./overrides";

export type ModalProps = Omit<BaseModalProps, "animate" | "closable"> & {
  animate?: boolean;
  closeable?: boolean;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  role = ROLE.dialog,
  overrides: baseOverrides,
  animate = true,
  closeable = true,
  ...props
}) => {
  const modalOverrides = getModalOverrides();
  const overrides = getMergedOverrides(modalOverrides, baseOverrides);

  return (
    <BaseModal
      overrides={overrides}
      isOpen={isOpen}
      onClose={onClose}
      role={role}
      animate={animate}
      closeable={closeable}
      {...props}
    />
  );
};

export default Modal;
