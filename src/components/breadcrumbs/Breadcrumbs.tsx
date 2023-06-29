import React from "react";
import { Breadcrumbs as BaseBreadcrumbs, BreadcrumbsProps as BaseBreadcrumbsProps } from "baseui/breadcrumbs";
import { getBreadcrumbsOverrides } from "./overrides";

export type BreadcrumbsProps = BaseBreadcrumbsProps;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ ...props }) => {
  const overrides = getBreadcrumbsOverrides();

  return <BaseBreadcrumbs {...props} overrides={overrides} />;
};

export default Breadcrumbs;
