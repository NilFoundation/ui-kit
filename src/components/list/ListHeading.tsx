import { FC } from "react";
import { ListHeading as BaseListHeading, HeadingProps } from "baseui/list";
import { getListHeadingOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type ListHeadingProps = HeadingProps;

const ListHeading: FC<ListHeadingProps> = ({ overrides: baseOverrides, ...props }) => {
  const listHeadingOverrides = getListHeadingOverrides();
  const overrides = getMergedOverrides(listHeadingOverrides, baseOverrides);

  return <BaseListHeading {...props} overrides={overrides} />;
};

export default ListHeading;
