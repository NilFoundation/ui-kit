import React, { Fragment, ReactElement, createElement, useMemo } from "react";
import { isExternalLink } from "../../../shared/utils/isExternalLink";

type LinkComponentProps = {
  children?: React.ReactNode;
  className?: string;
  href?: string;
};

type LinkComponentRenderFunction = (props: LinkComponentProps) => ReactElement;

export const getLinkComponent = (linkComponent?: LinkComponentRenderFunction, href?: string) => {
  return useMemo(() => {
    if (linkComponent) {
      return function LinkComponent({ children, className }: LinkComponentProps) {
        return linkComponent({ children, className, href });
      };
    }

    if (href) {
      return function LinkComponent({ children, className }: LinkComponentProps) {
        return createElement(
          "a",
          {
            href,
            className,
            ...(isExternalLink(href) ? { rel: "noopener noreferrer" } : {}),
          },
          children
        );
      };
    }

    return Fragment;
  }, [linkComponent, href]);
};
