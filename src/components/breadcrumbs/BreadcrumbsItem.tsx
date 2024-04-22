import { FC, ReactNode } from "react";
import { COLORS } from "../../shared";
import { ParagraphXSmall } from "baseui/typography";
import { BlockOverrides } from "baseui/block";
import { expandProperty } from "inline-style-expand-shorthand";
import { LinkComponentRenderFunction, getCustomLinkComponent } from "../../shared/ui/getCustomLinkComponent";

export type BreadcrumbsItemProps = {
  href?: string;
  isActive?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  linkComponent?: LinkComponentRenderFunction;
};

const getColor = (isActive?: boolean, isDisabled?: boolean): string => {
  if (isDisabled) {
    return COLORS.gray500;
  }
  if (isActive) {
    return COLORS.gray50;
  }
  return COLORS.gray400;
};

const getLinkHoverColor = (isActive?: boolean, isDisabled?: boolean): string => {
  if (isDisabled) {
    return COLORS.gray500;
  }
  if (isActive) {
    return COLORS.gray50;
  }
  return COLORS.gray200;
};

const getParagraphOverrides = (isActive?: boolean, isDisabled?: boolean, hasLink?: boolean): BlockOverrides => ({
  Block: {
    style: {
      ...expandProperty("transition", "color 0.15s ease-in-out"),
      ...expandProperty("padding", "0"),
      color: getColor(isActive, isDisabled),
      ":hover": {
        color: getLinkHoverColor(isActive, isDisabled),
      },
      cursor: isDisabled ? "not-allowed" : hasLink ? "pointer" : "auto",
    },
  },
});

const BreadcrumbsItem: FC<BreadcrumbsItemProps> = ({ isActive, disabled, href, children, linkComponent }) => {
  const LinkComponent = getCustomLinkComponent(linkComponent, href);

  return (
    <ParagraphXSmall overrides={getParagraphOverrides(isActive, disabled, !!href || !!linkComponent)}>
      <LinkComponent>{children}</LinkComponent>
    </ParagraphXSmall>
  );
};

export default BreadcrumbsItem;
