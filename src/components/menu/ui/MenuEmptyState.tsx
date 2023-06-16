import { FC, memo } from "react";
import { styled } from "styletron-react";
import { HeadingXSmall, ParagraphMedium } from "baseui/typography";
import { useStyletron } from "baseui";
import { EmptyStateContainerStyles, emptyStateTextStyles, emptyStateTitleStyles } from "../styles";

const MenuEmptyState: FC = () => {
  const [css] = useStyletron();

  const Wrapper = styled("div", EmptyStateContainerStyles);

  return (
    <Wrapper>
      <HeadingXSmall className={css(emptyStateTitleStyles)}>No results found</HeadingXSmall>
      <ParagraphMedium color="primary300" className={css(emptyStateTextStyles)}>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus.
      </ParagraphMedium>
    </Wrapper>
  );
};

export default memo(MenuEmptyState);
