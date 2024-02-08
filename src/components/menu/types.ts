import { RenderItemProps, StatefulMenuProps } from "baseui/menu";
import { ParagraphSmall } from "baseui/typography";
import { ComponentProps, ComponentType, ElementType, ReactNode } from "react";
import type { XOR } from "ts-xor";

export enum MENU_SIZE {
  "small" = "small",
  "medium" = "medium",
  "large" = "large",
}

export type MenuProps = StatefulMenuProps & {
  size?: MENU_SIZE;
};

export type MenuItemTypographyProps = ComponentProps<typeof ParagraphSmall>;

export type MenuItemBaseProps = RenderItemProps & {
  selected?: boolean;
  suffixText?: string;
  startEnhancer?: ReactNode | ComponentType<any>;
  endEnhancer?: ReactNode | ComponentType<any>;
  isActive?: boolean;
  size: MENU_SIZE;
  ariaSelected?: boolean;
  label?: string;
};

export type MenuItemPropsWithHref = MenuItemBaseProps & {
  href?: string;
};

export type MenuItemPropsWithLinkComponent<T extends ElementType = ElementType> = MenuItemBaseProps & {
  linkComponent?: T;
} & Omit<ComponentProps<T>, keyof MenuItemBaseProps>;

export type MenuItemProps = XOR<MenuItemPropsWithHref, MenuItemPropsWithLinkComponent>;
