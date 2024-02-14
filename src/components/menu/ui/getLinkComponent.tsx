import React, { Fragment, ReactElement, cloneElement, createElement, useMemo } from "react";
import { isExternalLink } from "../../../shared/utils/isExternalLink";

type LinkComponentProps = {
  children?: React.ReactNode;
  className?: string;
};

export const getLinkComponent = (LinkComponent?: ReactElement, href?: string) => {
  return useMemo(() => {
    if (LinkComponent) {
      return ({ children, className }: LinkComponentProps) => cloneElement(LinkComponent, { className, children });
    }

    if (href) {
      return ({ children, className }: LinkComponentProps) =>
        createElement(
          "a",
          {
            href,
            className,
            ...(isExternalLink(href) ? { rel: "noopener noreferrer" } : {}),
          },
          children
        );
    }

    return Fragment;
  }, [LinkComponent, href]);
};
