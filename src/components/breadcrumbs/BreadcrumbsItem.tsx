import { FC, ReactNode } from "react";
import { Link as BaseLink } from "baseui/link/styled-components";
import { withStyle } from "baseui";
import { COLORS } from "../../shared";

export type BreadcrumbsItemProps = {
  href?: string;
  isActive?: boolean;
  disabled?: boolean;
  children?: ReactNode;
};

const getLinkColor = (isActive?: boolean, isDisabled?: boolean): string => {
  if (isDisabled) {
    return COLORS.gray500;
  }
  if (isActive) {
    return COLORS.gray300;
  }
  return COLORS.white;
};

const getLinkHoverColor = (isActive?: boolean, isDisabled?: boolean): string => {
  if (isDisabled || isActive) {
    return getLinkColor(isActive, isDisabled);
  }
  return COLORS.gray200;
};

const BreadcrumbsItem: FC<BreadcrumbsItemProps> = ({ isActive, disabled, href, children }) => {
  const Link = withStyle(BaseLink, {
    textDecoration: "none !important",
    color: `${getLinkColor(isActive, disabled)} !important`,
    cursor: disabled ? "not-allowed" : "pointer",

    ":hover": {
      color: `${getLinkHoverColor(isActive, disabled)} !important`,
    },

    ":focus": {
      color: `${COLORS.gray300} !important`,
    },
  });

  return <Link href={!disabled ? href : undefined}>{children}</Link>;
};

export default BreadcrumbsItem;
