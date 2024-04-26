import { cloneElement, forwardRef } from "react";
import { MENU_SIZE, MenuItemProps, MenuItemTypographyProps } from "../types";
import { ParagraphSmall, ParagraphMedium, ParagraphLarge } from "baseui/typography";
import { useStyletron, styled } from "baseui";
import { Checkbox } from "../../checkbox";
import {
  getItemContainerStyles,
  getItemParagraphColor,
  LinkComponentStyles,
  ItemEndWrapperStyles,
  itemTypographyStyles,
  svgActiveStyles,
} from "../styles";
import { CheckmarkIcon } from "../../icons";
import { COLORS } from "../../../shared";
import { getCustomLinkComponent } from "../../../shared/ui/getCustomLinkComponent";

const paragraphComponent = {
  [MENU_SIZE.small]: (props: MenuItemTypographyProps) => <ParagraphSmall as="div" {...props} />,
  [MENU_SIZE.medium]: (props: MenuItemTypographyProps) => <ParagraphMedium as="div" {...props} />,
  [MENU_SIZE.large]: (props: MenuItemTypographyProps) => <ParagraphLarge as="div" {...props} />,
};

const iconSizeMap = {
  [MENU_SIZE.small]: 16,
  [MENU_SIZE.medium]: 24,
  [MENU_SIZE.large]: 32,
};

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ size, item, onClick, disabled, ariaSelected, isHighlighted, onMouseEnter, id }, ref) => {
    const [css] = useStyletron();

    const isAreaSelected = ariaSelected && !disabled;
    const paragraphColor = getItemParagraphColor(isAreaSelected || !!isHighlighted, !!disabled);
    const Item = styled("li", getItemContainerStyles(size, !!disabled, !!isHighlighted, !!ariaSelected));
    const EndWrapper = styled("span", ItemEndWrapperStyles);
    const TypographyComponent = paragraphComponent[size];
    const LinkComponent = getCustomLinkComponent(item.linkComponent, item.href);

    return (
      <Item ref={ref} onMouseEnter={onMouseEnter} id={id ?? undefined} onClick={onClick}>
        <LinkComponent className={css(LinkComponentStyles)}>
          {item?.selected != null && <Checkbox checked={item.selected} />}
          {item?.startEnhancer &&
            cloneElement(item.startEnhancer, {
              size: iconSizeMap[size],
              className: css(isAreaSelected ? svgActiveStyles : {}),
            })}
          <TypographyComponent className={css(itemTypographyStyles)} color={paragraphColor}>
            {item.label}
          </TypographyComponent>
          <EndWrapper>
            {item?.suffixText && <TypographyComponent color={paragraphColor}>{item.suffixText}</TypographyComponent>}
            {item?.endEnhancer &&
              cloneElement(item.endEnhancer, {
                size: iconSizeMap[size],
                className: css(isAreaSelected ? svgActiveStyles : {}),
              })}
          </EndWrapper>
          {item?.isActive && <CheckmarkIcon size={iconSizeMap[size]} color={COLORS.gray300} />}
        </LinkComponent>
      </Item>
    );
  }
);

MenuItem.displayName = "MenuItem";
export default MenuItem;
