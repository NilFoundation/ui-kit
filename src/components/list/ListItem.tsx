import React, { FC } from "react";
import { ListItem as BaseListItem, ListProps as BaseListProps } from "baseui/list";
import { getListItemOverrides } from "./overrides";

export type ListItemProps = BaseListProps & {
  isActive?: boolean;
  disabled?: boolean;
};

const getChildrenNode = (node: React.ReactNode, disabled: boolean) => {
  if (React.isValidElement(node)) {
    return React.cloneElement(node as React.ReactElement, {
      disabled,
    });
  }
  return node;
};

const ListItem: FC<ListItemProps> = ({ isActive, disabled, children, ...props }) => {
  const overrides = getListItemOverrides(!!isActive, !!disabled);

  return (
    <BaseListItem {...props} overrides={overrides}>
      {getChildrenNode(children, !!disabled)}
    </BaseListItem>
  );
};

export default ListItem;
