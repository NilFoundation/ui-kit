import React, { ComponentProps, forwardRef, MouseEventHandler, ReactNode } from "react";
import { Item } from "baseui/menu";
import { MENU_SIZE } from "../types";
import { ParagraphSmall, ParagraphMedium, ParagraphLarge } from "baseui/typography";
import { useStyletron, styled } from "baseui";
import { SPINNER_SIZE } from "../../spinner";
import { Checkbox } from "../../checkbox";
import { RenderItemProps } from "baseui/menu/types";
import { getItemContainerStyles, ItemEndWrapperStyles, paragraphActiveStyles, svgActiveStyles } from "../styles";

type TExpandedItem = Item & {
  selected?: boolean;
  suffixText?: string;
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
};

type MenuItemProps = RenderItemProps & {
  item: TExpandedItem;
  size: MENU_SIZE;
  disabled?: boolean;
  ariaSelected?: boolean;
};

type TypographyProps = ComponentProps<typeof ParagraphSmall>;

const paragraphComponent = {
  [SPINNER_SIZE.small]: (props: TypographyProps) => <ParagraphSmall color="primary500" as="p" {...props} />,
  [SPINNER_SIZE.medium]: (props: TypographyProps) => <ParagraphMedium color="primary500" as="p" {...props} />,
  [SPINNER_SIZE.large]: (props: TypographyProps) => <ParagraphLarge color="primary500" as="p" {...props} />,
};

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ size, item, onClick, disabled, ariaSelected, onMouseEnter, id }, ref) => {
    const [css] = useStyletron();

    const isAreaSelected = ariaSelected && !disabled;

    const Item = styled("li", getItemContainerStyles(size, !!disabled, !!ariaSelected));
    const EndWrapper = styled("span", ItemEndWrapperStyles);
    const TypographyComponent = paragraphComponent[size];

    const onClickHandler: MouseEventHandler<HTMLLIElement> = (event) => {
      onClick?.(event);
    };

    return (
      // @ts-ignore
      <Item ref={ref} onMouseEnter={onMouseEnter} id={id} onClick={onClickHandler}>
        {item?.selected != null && <Checkbox checked={item.selected} />}
        {item?.startEnhancer &&
          React.cloneElement(item.startEnhancer, {
            size: 20,
            color: "primary500",
            className: css(isAreaSelected ? svgActiveStyles : {}),
          })}
        <TypographyComponent className={css(ariaSelected && !disabled ? paragraphActiveStyles : {})} color="primary500">
          {item.label}
        </TypographyComponent>
        <EndWrapper>
          {item?.suffixText && (
            <TypographyComponent
              className={css(ariaSelected && !disabled ? paragraphActiveStyles : {})}
              color="primary500"
            >
              {item.suffixText}
            </TypographyComponent>
          )}
          {item?.endEnhancer &&
            React.cloneElement(item.endEnhancer, {
              size: 20,
              color: "primary500",
              className: css(ariaSelected && !disabled ? svgActiveStyles : {}),
            })}
        </EndWrapper>
      </Item>
    );
  }
);
MenuItem.displayName = "MenuItem";

export default MenuItem;
