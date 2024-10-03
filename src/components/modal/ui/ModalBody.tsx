import { FC, ReactNode } from "react";
import { ParagraphSmall } from "baseui/typography";
import { useStyletron } from "baseui";
import { modalBodyStyles } from "../styles";
import { COLORS } from "../../../shared";

export type ModalBodyProps = {
  children?: ReactNode;
};

const ModalBody: FC<ModalBodyProps> = ({ children }) => {
  const [css] = useStyletron();
  return (
    <div className={css(modalBodyStyles)}>
      <ParagraphSmall as="div" margin={0} color={COLORS.gray300}>
        {children}
      </ParagraphSmall>
    </div>
  );
};

export default ModalBody;
