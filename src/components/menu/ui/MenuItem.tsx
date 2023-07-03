import React, { ComponentProps, forwardRef, MouseEventHandler, ReactNode } from "react";
import { Item } from "baseui/menu";
import { MENU_SIZE } from "../types";
import { ParagraphSmall, ParagraphMedium, ParagraphLarge } from "baseui/typography";
import { useStyletron, styled } from "baseui";
import { SPINNER_SIZE } from "../../spinner";
import { Checkbox } from "../../checkbox";
import { RenderItemProps } from "baseui/menu/types";
import { getItemContainerStyles, ItemEndWrapperStyles, svgActiveStyles } from "../styles";
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
};

type TypographyProps = ComponentProps<typeof ParagraphSmall>;

const paragraphComponent = {
  [SPINNER_SIZE.small]: (props: TypographyProps) => <ParagraphSmall color="primary500" as="div" {...props} />,
  [SPINNER_SIZE.medium]: (props: TypographyProps) => <ParagraphMedium color="primary500" as="div" {...props} />,
  [SPINNER_SIZE.large]: (props: TypographyProps) => <ParagraphLarge color="primary500" as="div" {...props} />,
};

const getParagraphColor = (isActive: boolean) => {
  if (isActive) {
    return PRIMITIVE_COLORS.white;
  }
  return PRIMITIVE_COLORS.primary500;
};

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ size, item, onClick, disabled, ariaSelected, isHighlighted, onMouseEnter, id }, ref) => {
    const [css] = useStyletron();

    const isAreaSelected = ariaSelected && !disabled;
    const paragraphColor = getParagraphColor(isAreaSelected || !!isHighlighted);

    const Item = styled("li", getItemContainerStyles(size, !!disabled, !!isHighlighted, !!ariaSelected));
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
        <TypographyComponent color={paragraphColor}>{item.label}</TypographyComponent>
        <EndWrapper>
          {item?.suffixText && <TypographyComponent color={paragraphColor}>{item.suffixText}</TypographyComponent>}
          {item?.endEnhancer &&
            React.cloneElement(item.endEnhancer, {
              size: 20,
              color: "primary500",
              className: css(isAreaSelected ? svgActiveStyles : {}),
            })}
        </EndWrapper>
        {item?.isActive && <SeparatorIcon size={20} color={PRIMITIVE_COLORS.primary300} />}
      </Item>
    );
  }
);
MenuItem.displayName = "MenuItem";

export default MenuItem;
