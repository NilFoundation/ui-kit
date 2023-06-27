import { FC } from "react";
import { ListHeading as BaseListHeading, HeadingProps } from "baseui/list";
import { getListHeadingOverrides } from "./overrides";

export type ListHeadingProps = HeadingProps;

const ListHeading: FC<ListHeadingProps> = ({ ...props }) => {
  const overrides = getListHeadingOverrides();

  return <BaseListHeading {...props} overrides={overrides} />;
};

export default ListHeading;
