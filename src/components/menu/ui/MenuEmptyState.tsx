import { FC } from "react";
import { HeadingXSmall } from "baseui/typography";
import { useStyletron, styled } from "baseui";
import { EmptyStateContainerStyles, emptyStateTitleStyles } from "../styles";

const MenuEmptyState: FC = () => {
  const [css] = useStyletron();

  const Wrapper = styled("div", EmptyStateContainerStyles);

  return (
    <Wrapper>
      <HeadingXSmall className={css(emptyStateTitleStyles)}>No results found</HeadingXSmall>
    </Wrapper>
  );
};

export default MenuEmptyState;
