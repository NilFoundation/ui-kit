import React, { Fragment, ReactElement, useMemo } from "react";
import { isExternalLink } from "../utils/isExternalLink";
import { styled } from "styletron-react";

export type LinkComponentProps = {
  children?: React.ReactNode;
  className?: string;
  href?: string;
};

export type LinkComponentRenderFunction = (props: LinkComponentProps) => ReactElement;

const ResetLink = styled("a", {
  color: "inherit",
  cursor: "unset",
  textDecoration: "none",
  ":hover": {
    textDecoration: "none",
  },
  ":visited": {
    color: "inherit",
  },
});

export const getCustomLinkComponent = (linkComponent?: LinkComponentRenderFunction, href?: string) => {
  return useMemo(() => {
    if (linkComponent) {
      return function LinkComponent({ children, className }: LinkComponentProps) {
        return linkComponent({ children, className, href });
      };
    }

    if (href) {
      return function LinkComponent({ children, className }: LinkComponentProps) {
        return (
          <ResetLink
            href={href}
            target={isExternalLink(href) ? "_blank" : undefined}
            rel={isExternalLink(href) ? "noopener noreferrer" : undefined}
            className={className}
          >
            {children}
          </ResetLink>
        );
      };
    }

    return Fragment;
  }, [linkComponent, href]);
};
