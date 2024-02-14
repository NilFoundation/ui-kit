import React, { cloneElement, ComponentProps, createElement, forwardRef, MouseEventHandler, ReactNode, useMemo } from "react";
import { Item } from "baseui/menu";
import { MENU_SIZE } from "../types";
import { ParagraphSmall, ParagraphMedium, ParagraphLarge } from "baseui/typography";
import { useStyletron, styled } from "baseui";
import { SPINNER_SIZE } from "../../spinner";
import { Checkbox } from "../../checkbox";
import { RenderItemProps } from "baseui/menu/types";
import {
  getItemContainerStyles,
  getItemParagraphColor,
  ItemEndWrapperStyles,
  itemTypographyStyles,
  svgActiveStyles,
} from "../styles";
import { SeparatorIcon } from "../../icons";
import { PRIMITIVE_COLORS } from "../../../shared";

type TExpandedItem = Item & {
  selected?: boolean;
  suffixText?: string;
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
  isActive?: boolean;
  linkComponent?: ReactNode;
};

type MenuItemProps = RenderItemProps & {
  item: TExpandedItem;
  size: MENU_SIZE;
  disabled?: boolean;
  ariaSelected?: boolean;
  isHighlighted?: boolean;
  children?: ReactNode;
};

type TypographyProps = ComponentProps<typeof ParagraphSmall>;

const paragraphComponent = {
  [SPINNER_SIZE.small]: (props: TypographyProps) => <ParagraphSmall color="gray500" as="div" {...props} />,
  [SPINNER_SIZE.medium]: (props: TypographyProps) => <ParagraphMedium color="gray500" as="div" {...props} />,
  [SPINNER_SIZE.large]: (props: TypographyProps) => <ParagraphLarge color="gray500" as="div" {...props} />,
};

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ size, item, onClick, disabled, ariaSelected, isHighlighted, onMouseEnter, id }, ref) => {
    const [css] = useStyletron();

    const isAreaSelected = ariaSelected && !disabled;
    const paragraphColor = getItemParagraphColor(isAreaSelected || !!isHighlighted, !!disabled);

    const Item = styled("li", getItemContainerStyles(size, !!disabled, !!isHighlighted, !!ariaSelected));
    const EndWrapper = styled("span", ItemEndWrapperStyles);
    const TypographyComponent = paragraphComponent[size];

    const LinkComponent = useMemo(() => {
      if (item.linkComponent) {
        return () =>
          cloneElement(item.linkComponent as any, {
            href: item.href,
          });
      }

      if (item.href) {
        return () =>
          createElement("a", {
            href;  item.href,
            ...(isExternalLink(href) ? { rel: "noopener noreferrer" } : {}),
          });
      }

      return Fragment;
    }, [linkComponent, linkComponentProps, href]);

    return (
      <Item ref={ref} onMouseEnter={onMouseEnter} id={id ?? undefined} onClick={onClick}>
        {item?.selected != null && <Checkbox checked={item.selected} />}
        {item?.startEnhancer &&
          React.cloneElement(item.startEnhancer, {
            size: 20,
            className: css(isAreaSelected ? svgActiveStyles : {}),
          })}
        <TypographyComponent
          className={css(itemTypographyStyles)}
          as={item?.href ? "a" : "div"}
          href={item?.href}
          color={paragraphColor}
        >
          {item.label}
        </TypographyComponent>
        <EndWrapper>
          {item?.suffixText && <TypographyComponent color={paragraphColor}>{item.suffixText}</TypographyComponent>}
          {item?.endEnhancer &&
            React.cloneElement(item.endEnhancer, {
              size: 20,
              className: css(isAreaSelected ? svgActiveStyles : {}),
            })}
        </EndWrapper>
        {item?.isActive && <SeparatorIcon size={20} color={PRIMITIVE_COLORS.gray300} />}
      </Item>
    );
  }
);
MenuItem.displayName = "MenuItem";

export default MenuItem;
