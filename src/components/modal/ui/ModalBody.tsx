import { FC } from "react";
import { ModalBody as BaseModalBody } from "baseui/modal";
import { ParagraphSmall } from "baseui/typography";
import { useStyletron } from "baseui";
import { modalBodyStyles } from "../styles";
import { PRIMITIVE_COLORS } from "../../../shared";

export type ModalBodyProps = {
  children?: any;
};

const ModalBody: FC<ModalBodyProps> = ({ children }) => {
  const [css] = useStyletron();
  return (
    <BaseModalBody className={css(modalBodyStyles)}>
      <ParagraphSmall margin={0} color={PRIMITIVE_COLORS.primary300}>
        {children}
      </ParagraphSmall>
    </BaseModalBody>
  );
};

export default ModalBody;
