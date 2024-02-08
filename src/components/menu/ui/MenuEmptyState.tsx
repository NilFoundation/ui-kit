import { FC, memo } from "react";
import { HeadingXSmall, ParagraphMedium } from "baseui/typography";
import { useStyletron, styled } from "baseui";
import { EmptyStateContainerStyles, emptyStateTextStyles, emptyStateTitleStyles } from "../styles";
import { PRIMITIVE_COLORS } from "../../../shared";

const Wrapper = styled("div", EmptyStateContainerStyles);

const MenuEmptyState: FC = () => {
  const [css] = useStyletron();

  return (
    <Wrapper>
      <HeadingXSmall className={css(emptyStateTitleStyles)}>No results found</HeadingXSmall>
      <ParagraphMedium color={PRIMITIVE_COLORS.gray200} className={css(emptyStateTextStyles)}>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus.
      </ParagraphMedium>
    </Wrapper>
  );
};

export default memo(MenuEmptyState);
