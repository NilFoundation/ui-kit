import { FC } from "react";
import { ListItemLabel as BaseListItemLabel, LabelProps } from "baseui/list";
import { getListItemLabelOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type ListItemLabelProps = LabelProps & {
  disabled?: boolean;
};

const ListItemLabel: FC<ListItemLabelProps> = ({ disabled, overrides: baseOverrides, ...props }) => {
  const listItemLabelOverrides = getListItemLabelOverrides(!!disabled);
  const overrides = getMergedOverrides(listItemLabelOverrides, baseOverrides);

  return <BaseListItemLabel {...props} overrides={overrides} />;
};

export default ListItemLabel;
