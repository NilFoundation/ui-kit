import React, { FC, cloneElement, isValidElement } from "react";
import { ListItem as BaseListItem, ListProps as BaseListProps } from "baseui/list";
import { getListItemOverrides } from "./overrides";
import { getMergedOverrides } from "../../shared/utils/getMergedOverrides";

export type ListItemProps = BaseListProps & {
  isActive?: boolean;
  disabled?: boolean;
};

const getChildrenNode = (node: React.ReactNode, disabled: boolean) => {
  if (isValidElement(node)) {
    return cloneElement(node as React.ReactElement, {
      disabled,
    });
  }
  return node;
};

const ListItem: FC<ListItemProps> = ({ isActive, disabled, children, overrides: baseOverrides, ...props }) => {
  const listItemOverrides = getListItemOverrides(!!isActive, !!disabled);
  const overrides = getMergedOverrides(listItemOverrides, baseOverrides);

  return (
    <BaseListItem {...props} overrides={overrides}>
      {getChildrenNode(children, !!disabled)}
    </BaseListItem>
  );
};

export default ListItem;
