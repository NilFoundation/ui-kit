import { FC, ReactNode } from "react";
import { HeadingMedium } from "baseui/typography";
import { useStyletron } from "baseui";
import { modalHeaderStyles } from "../styles";

export type ModalHeaderProps = {
  children?: ReactNode;
};

const ModalHeader: FC<ModalHeaderProps> = ({ children }) => {
  const [css] = useStyletron();
  return (
    <div className={css(modalHeaderStyles)}>
      <HeadingMedium as="div">{children}</HeadingMedium>
    </div>
  );
};

export default ModalHeader;
