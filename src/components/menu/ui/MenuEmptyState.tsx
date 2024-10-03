import { FC } from "react";
import { LabelSmall } from "baseui/typography";
import { useStyletron, styled } from "baseui";
import { EmptyStateContainerStyles, emptyStateTitleStyles } from "../styles";
import { COLORS } from "../../../shared";

const Wrapper = styled("div", EmptyStateContainerStyles);

const MenuEmptyState: FC = () => {
  const [css] = useStyletron();

  return (
    <Wrapper>
      <LabelSmall color={COLORS.gray400} className={css(emptyStateTitleStyles)}>
        No results found
      </LabelSmall>
    </Wrapper>
  );
};

export default MenuEmptyState;
