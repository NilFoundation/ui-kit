import { FC } from "react";
import { HeadingSmall } from "baseui/typography";
import { useStyletron } from "baseui";
import { modalHeaderStyles } from "../styles";

export type ModalHeaderProps = {
  children?: any;
};

const ModalHeader: FC<ModalHeaderProps> = ({ children }) => {
  const [css] = useStyletron();
  return (
    <div className={css(modalHeaderStyles)}>
      <HeadingSmall as="div" margin={0}>
        {children}
      </HeadingSmall>
    </div>
  );
};

export default ModalHeader;
