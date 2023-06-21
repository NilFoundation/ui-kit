import { FC } from "react";
import {
  LabelLarge,
  LabelMedium,
  LabelSmall,
  LabelXSmall,
  MonoLabelLarge,
  MonoLabelMedium,
  MonoLabelSmall,
  MonoLabelXSmall,
} from "baseui/typography";
import { TypographyProps } from "./types";
import { StyledBlock } from "baseui/block/styled-components";
import { StyledDivider } from "baseui/divider";

const LabelStory: FC<TypographyProps> = ({ children }) => {
  return (
    <>
      <StyledBlock $marginBottom="20px">
        <LabelLarge>Label Large{children ? ` - ${children}` : ""}</LabelLarge>
        <LabelMedium>Label Medium{children ? ` - ${children}` : ""}</LabelMedium>
        <LabelSmall>Label Small{children ? ` - ${children}` : ""}</LabelSmall>
        <LabelXSmall>Label XSmall{children ? ` - ${children}` : ""}</LabelXSmall>
      </StyledBlock>

      <StyledDivider />

      <StyledBlock $marginTop="20px">
        <MonoLabelLarge>Mono Label Large{children ? ` - ${children}` : ""}</MonoLabelLarge>
        <MonoLabelMedium>Mono Label Medium{children ? ` - ${children}` : ""}</MonoLabelMedium>
        <MonoLabelSmall>Mono Label Small{children ? ` - ${children}` : ""}</MonoLabelSmall>
        <MonoLabelXSmall>Mono Label XSmall{children ? ` - ${children}` : ""}</MonoLabelXSmall>
      </StyledBlock>
    </>
  );
};

export default LabelStory;
