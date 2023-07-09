import { FC } from "react";
import { ModalHeader as BaseModalHeader } from "baseui/modal";
import { HeadingSmall } from "baseui/typography";
import { useStyletron } from "baseui";
import { modalHeaderStyles } from "../styles";

export type ModalHeaderProps = {
  children?: any;
};

const ModalHeader: FC<ModalHeaderProps> = ({ children }) => {
  const [css] = useStyletron();
  return (
    <BaseModalHeader className={css(modalHeaderStyles)}>
      <HeadingSmall margin={0}>{children}</HeadingSmall>
    </BaseModalHeader>
  );
};

export default ModalHeader;
