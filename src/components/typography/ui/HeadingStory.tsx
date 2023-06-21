import { FC } from "react";
import { TypographyProps } from "./types";
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
  MonoHeadingXSmall,
  MonoHeadingSmall,
  MonoHeadingMedium,
  MonoHeadingLarge,
  MonoHeadingXLarge,
  MonoHeadingXXLarge,
} from "baseui/typography";
import { StyledBlock } from "baseui/block/styled-components";
import { StyledDivider } from "baseui/divider";

const HeadingStory: FC<TypographyProps> = ({ children }) => {
  return (
    <>
      <StyledBlock $marginBottom="20px">
        <HeadingXXLarge>Heading XXLarge{children ? ` - ${children}` : ""}</HeadingXXLarge>
        <HeadingXLarge>Heading XLarge{children ? ` - ${children}` : ""}</HeadingXLarge>
        <HeadingLarge>Heading Large{children ? ` - ${children}` : ""}</HeadingLarge>
        <HeadingMedium>Heading Medium{children ? ` - ${children}` : ""}</HeadingMedium>
        <HeadingSmall>Heading Small{children ? ` - ${children}` : ""}</HeadingSmall>
        <HeadingXSmall>Heading XSmall{children ? ` - ${children}` : ""}</HeadingXSmall>
      </StyledBlock>

      <StyledDivider />

      <StyledBlock $marginTop="20px">
        <MonoHeadingXXLarge>Mono Heading XXLarge{children ? ` - ${children}` : ""}</MonoHeadingXXLarge>
        <MonoHeadingXLarge>Mono Heading XLarge{children ? ` - ${children}` : ""}</MonoHeadingXLarge>
        <MonoHeadingLarge>Mono Heading Large{children ? ` - ${children}` : ""}</MonoHeadingLarge>
        <MonoHeadingMedium>Mono Heading Medium{children ? ` - ${children}` : ""}</MonoHeadingMedium>
        <MonoHeadingSmall>Mono Heading Small{children ? ` - ${children}` : ""}</MonoHeadingSmall>
        <MonoHeadingXSmall>Mono Heading XSmall{children ? ` - ${children}` : ""}</MonoHeadingXSmall>
      </StyledBlock>
    </>
  );
};

export default HeadingStory;
