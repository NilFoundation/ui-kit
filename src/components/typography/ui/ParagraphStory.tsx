import { FC } from "react";
import {
  ParagraphLarge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphXSmall,
  MonoParagraphLarge,
  MonoParagraphMedium,
  MonoParagraphSmall,
  MonoParagraphXSmall,
} from "baseui/typography";
import { TypographyProps } from "./types";
import { StyledBlock } from "baseui/block/styled-components";
import { StyledDivider } from "baseui/divider";

const ParagraphStory: FC<TypographyProps> = ({ children }) => {
  return (
    <>
      <StyledBlock $marginBottom="20px">
        <ParagraphLarge>Paragraph Large{children ? ` - ${children}` : ""}</ParagraphLarge>
        <ParagraphMedium>Paragraph Medium{children ? ` - ${children}` : ""}</ParagraphMedium>
        <ParagraphSmall>Paragraph Small{children ? ` - ${children}` : ""}</ParagraphSmall>
        <ParagraphXSmall>Paragraph XSmall{children ? ` - ${children}` : ""}</ParagraphXSmall>
      </StyledBlock>

      <StyledDivider />

      <StyledBlock $marginTop="20px">
        <MonoParagraphLarge>Mono Paragraph Large{children ? ` - ${children}` : ""}</MonoParagraphLarge>
        <MonoParagraphMedium>Mono Paragraph Medium{children ? ` - ${children}` : ""}</MonoParagraphMedium>
        <MonoParagraphSmall>Mono Paragraph Small{children ? ` - ${children}` : ""}</MonoParagraphSmall>
        <MonoParagraphXSmall>Mono Paragraph XSmall{children ? ` - ${children}` : ""}</MonoParagraphXSmall>
      </StyledBlock>
    </>
  );
};

export default ParagraphStory;
