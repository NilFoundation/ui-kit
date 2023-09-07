import React, { ComponentProps, forwardRef, MouseEventHandler, ReactNode } from "react";
import { Item } from "baseui/menu";
import { MENU_SIZE } from "../types";
import { ParagraphSmall, ParagraphMedium, ParagraphLarge } from "baseui/typography";
import { useStyletron, styled } from "baseui";
import { SPINNER_SIZE } from "../../spinner";
import { Checkbox } from "../../checkbox";
import { RenderItemProps } from "baseui/menu/types";
import { getItemContainerStyles, ItemEndWrapperStyles, itemTypographyStyles, svgActiveStyles } from "../styles";
import { SeparatorIcon } from "../../icons";
import { PRIMITIVE_COLORS } from "../../../shared";

type TExpandedItem = Item & {
  selected?: boolean;
  suffixText?: string;
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
  isActive?: boolean;
};

type MenuItemProps = RenderItemProps & {
  item: TExpandedItem;
  size: MENU_SIZE;
  disabled?: boolean;
  ariaSelected?: boolean;
  isHighlighted?: boolean;
  isLight?: boolean;
  children?: ReactNode;
};

type TypographyProps = ComponentProps<typeof ParagraphSmall>;

const paragraphComponent = {
  [SPINNER_SIZE.small]: (props: TypographyProps) => <ParagraphSmall color="gray500" as="div" {...props} />,
  [SPINNER_SIZE.medium]: (props: TypographyProps) => <ParagraphMedium color="gray500" as="div" {...props} />,
  [SPINNER_SIZE.large]: (props: TypographyProps) => <ParagraphLarge color="gray500" as="div" {...props} />,
};

const getParagraphColor = (isActive: boolean, isDisabled: boolean, isLight: boolean) => {
  if (isDisabled) {
    return isLight ? PRIMITIVE_COLORS.gray300 : PRIMITIVE_COLORS.gray600;
  }
  if (isActive) {
    return PRIMITIVE_COLORS.white;
  }
  return isLight ? PRIMITIVE_COLORS.gray800 : PRIMITIVE_COLORS.gray500;
};

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ size, item, onClick, disabled, ariaSelected, isHighlighted, isLight, onMouseEnter, id }, ref) => {
    const [css] = useStyletron();

    const isAreaSelected = ariaSelected && !disabled;
    const paragraphColor = getParagraphColor(isAreaSelected || !!isHighlighted, !!disabled, !!isLight);

    const Item = styled("li", getItemContainerStyles(size, !!disabled, !!isHighlighted, !!ariaSelected, !!isLight));
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
