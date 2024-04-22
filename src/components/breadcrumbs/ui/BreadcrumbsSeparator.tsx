import { FC } from "react";
import { ParagraphXSmall } from "baseui/typography";
import { COLORS } from "../../../shared";
import { BlockOverrides } from "baseui/block";
import { expandProperty } from "inline-style-expand-shorthand";

const overrides: BlockOverrides = {
  Block: {
    style: {
      ...expandProperty("padding", "0 4px"),
    },
  },
};

const BreadcrumbsSeparator: FC = () => {
  return (
    <ParagraphXSmall color={COLORS.gray400} overrides={overrides}>
      /
    </ParagraphXSmall>
  );
};

export default BreadcrumbsSeparator;
