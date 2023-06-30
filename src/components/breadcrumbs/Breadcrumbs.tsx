import React from "react";
import { Breadcrumbs as BaseBreadcrumbs, BreadcrumbsProps as BaseBreadcrumbsProps } from "baseui/breadcrumbs";
import { getBreadcrumbsOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type BreadcrumbsProps = BaseBreadcrumbsProps;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ overrides: baseOverrides, ...props }) => {
  const breadcrumbsOverrides = getBreadcrumbsOverrides();
  const overrides = getMergedOverrides(breadcrumbsOverrides, baseOverrides);

  return <BaseBreadcrumbs {...props} overrides={overrides} />;
};

export default Breadcrumbs;
