import React from "react";
import { Breadcrumbs as BaseBreadcrumbs, BreadcrumbsProps as BaseBreadcrumbsProps } from "baseui/breadcrumbs";

export type BreadcrumbsProps = BaseBreadcrumbsProps;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ ...props }) => {
  return <BaseBreadcrumbs {...props} />;
};

export default Breadcrumbs;
