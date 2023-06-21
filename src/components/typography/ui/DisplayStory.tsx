import { FC } from "react";
import {
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  DisplayXSmall,
  MonoDisplayLarge,
  MonoDisplayMedium,
  MonoDisplayXSmall,
  MonoDisplaySmall,
} from "baseui/typography";
import { TypographyProps } from "./types";
import { StyledBlock } from "baseui/block/styled-components";
import { StyledDivider } from "baseui/divider";

const DisplayStory: FC<TypographyProps> = ({ children }) => {
  return (
    <>
      <StyledBlock $marginBottom="20px">
        <DisplayLarge>Display Large{children ? ` - ${children}` : ""}</DisplayLarge>
        <DisplayMedium>Display Medium{children ? ` - ${children}` : ""}</DisplayMedium>
        <DisplaySmall>Display Small{children ? ` - ${children}` : ""}</DisplaySmall>
        <DisplayXSmall>Display XSmall{children ? ` - ${children}` : ""}</DisplayXSmall>
      </StyledBlock>

      <StyledDivider />

      <StyledBlock $marginTop="20px">
        <MonoDisplayLarge>Mono Display Large{children ? ` - ${children}` : ""}</MonoDisplayLarge>
        <MonoDisplayMedium>Mono Display Medium{children ? ` - ${children}` : ""}</MonoDisplayMedium>
        <MonoDisplaySmall>Mono Display Small{children ? ` - ${children}` : ""}</MonoDisplaySmall>
        <MonoDisplayXSmall>Mono Display XSmall{children ? ` - ${children}` : ""}</MonoDisplayXSmall>
      </StyledBlock>
    </>
  );
};

export default DisplayStory;
