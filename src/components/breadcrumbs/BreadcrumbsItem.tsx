import { FC, ReactNode } from "react";
import { Link as BaseLink } from "baseui/link/styled-components";
import { styled } from "baseui";
import { PRIMITIVE_COLORS } from "../../shared";

export type BreadcrumbsItemProps = {
  href?: string;
  isActive?: boolean;
  disabled?: boolean;
  children?: ReactNode;
};

const getLinkColor = (isActive?: boolean, isDisabled?: boolean): string => {
  if (isDisabled) {
    return PRIMITIVE_COLORS.gray500;
  }
  if (isActive) {
    return PRIMITIVE_COLORS.gray300;
  }
  return PRIMITIVE_COLORS.white;
};

const getLinkHoverColor = (isActive?: boolean, isDisabled?: boolean): string => {
  if (isDisabled || isActive) {
    return getLinkColor(isActive, isDisabled);
  }
  return PRIMITIVE_COLORS.gray200;
};

const BreadcrumbsItem: FC<BreadcrumbsItemProps> = ({ isActive, disabled, href, children }) => {
  const Link = styled(BaseLink, {
    textDecoration: "none !important",
    color: `${getLinkColor(isActive, disabled)} !important`,
    cursor: disabled ? "not-allowed" : "pointer",

    ":hover": {
      color: `${getLinkHoverColor(isActive, disabled)} !important`,
    },

    ":focus": {
      color: `${PRIMITIVE_COLORS.gray300} !important`,
    },
  });

  return <Link href={!disabled && href}>{children}</Link>;
};

export default BreadcrumbsItem;
