import { Item, RenderItemProps, StatefulMenuProps } from "baseui/menu";
import { ParagraphSmall } from "baseui/typography";
import { ComponentProps, ReactElement, ReactNode } from "react";

export enum MENU_SIZE {
  "small" = "small",
  "medium" = "medium",
  "large" = "large",
}

export type MenuProps = StatefulMenuProps & {
  size?: MENU_SIZE;
};

export type MenuItemTypographyProps = ComponentProps<typeof ParagraphSmall>;

export type TExpandedItem = Item & {
  selected?: boolean;
  suffixText?: string;
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
  isActive?: boolean;
  linkComponent?: ReactElement;
};

export type MenuItemProps = RenderItemProps & {
  item: TExpandedItem;
  size: MENU_SIZE;
  disabled?: boolean;
  ariaSelected?: boolean;
  isHighlighted?: boolean;
  children?: ReactNode;
};
