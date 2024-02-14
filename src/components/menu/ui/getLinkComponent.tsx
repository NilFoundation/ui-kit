import React, { Fragment, ReactElement, cloneElement, createElement, useMemo } from "react";
import { isExternalLink } from "../../../shared/utils/isExternalLink";

type LinkComponentProps = {
  children?: React.ReactNode;
  className?: string;
};

export const getLinkComponent = (linkComponent?: ReactElement, href?: string) => {
  return useMemo(() => {
    if (linkComponent) {
      return function LinkComponent({ children, className }: LinkComponentProps) {
        return cloneElement(linkComponent, { className, children });
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
