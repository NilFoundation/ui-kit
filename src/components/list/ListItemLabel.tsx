import { FC } from "react";
import { ListItemLabel as BaseListItemLabel, LabelProps } from "baseui/list";
import { getListItemLabelOverrides } from "./overrides";

export type ListItemLabelProps = LabelProps & {
  disabled?: boolean;
};

const ListItemLabel: FC<ListItemLabelProps> = ({ disabled, ...props }) => {
  const overrides = getListItemLabelOverrides(!!disabled);

  return <BaseListItemLabel {...props} overrides={overrides} />;
};

export default ListItemLabel;
