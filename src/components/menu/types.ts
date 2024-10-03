import { StatefulMenuProps } from "baseui/menu";
import { ParagraphSmall } from "baseui/typography";
import { ComponentProps, ReactElement, ReactNode } from "react";
import { LinkComponentRenderFunction } from "../../shared";

export enum MENU_SIZE {
  "small" = "small",
  "medium" = "medium",
  "large" = "large",
}

export type MenuItemTypographyProps = ComponentProps<typeof ParagraphSmall>;

export type MenuItem = {
  /** Highlights item and adds a checkbox if true */
  selected?: boolean;
  suffixText?: string;
  startEnhancer?: ReactElement;
  endEnhancer?: ReactElement;
  /** Adds checkmark */
  isActive?: boolean;
  linkComponent?: LinkComponentRenderFunction;
  href?: string;
  /** Highlights item as it was selected */
  isHighlighted?: boolean;
  label: ReactNode;
  disabled?: boolean;
};

export type ItemDivider = {
  divider: true;
};

export type Items = Array<MenuItem | ItemDivider>;

export type GroupedItems = {
  __ungrouped: Items;
  [x: string]: Items;
};

export type MenuProps = Omit<StatefulMenuProps, "items"> & {
  size?: MENU_SIZE;
  items: Items | GroupedItems;
  isDropdown?: boolean;
};
