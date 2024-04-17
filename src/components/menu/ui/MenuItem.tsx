import { cloneElement, forwardRef } from "react";
import { MenuItemProps, MenuItemTypographyProps } from "../types";
import { ParagraphSmall, ParagraphMedium, ParagraphLarge } from "baseui/typography";
import { useStyletron, styled } from "baseui";
import { SPINNER_SIZE } from "../../spinner";
import { Checkbox } from "../../checkbox";
import {
  getItemContainerStyles,
  getItemParagraphColor,
  getLinkComponentStyles,
  ItemEndWrapperStyles,
  itemTypographyStyles,
  svgActiveStyles,
} from "../styles";
import { SeparatorIcon } from "../../icons";
import { COLORS } from "../../../shared";
import { getLinkComponent } from "./getLinkComponent";

const paragraphComponent = {
  [SPINNER_SIZE.small]: (props: MenuItemTypographyProps) => <ParagraphSmall as="div" {...props} />,
  [SPINNER_SIZE.medium]: (props: MenuItemTypographyProps) => <ParagraphMedium as="div" {...props} />,
  [SPINNER_SIZE.large]: (props: MenuItemTypographyProps) => <ParagraphLarge as="div" {...props} />,
};

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ size, item, onClick, disabled, ariaSelected, isHighlighted, onMouseEnter, id }, ref) => {
    const [css] = useStyletron();

    const isAreaSelected = ariaSelected && !disabled;
    const paragraphColor = getItemParagraphColor(isAreaSelected || !!isHighlighted, !!disabled);
    const Item = styled("li", getItemContainerStyles(size, !!disabled, !!isHighlighted, !!ariaSelected));
    const EndWrapper = styled("span", ItemEndWrapperStyles);
    const TypographyComponent = paragraphComponent[size];
    const LinkComponent = getLinkComponent(item.linkComponent, item.href);

    return (
      <Item ref={ref} onMouseEnter={onMouseEnter} id={id ?? undefined} onClick={onClick}>
        <LinkComponent className={css(getLinkComponentStyles())}>
          {item?.selected != null && <Checkbox checked={item.selected} />}
          {item?.startEnhancer &&
            cloneElement(item.startEnhancer, {
              size: 16,
              className: css(isAreaSelected ? svgActiveStyles : {}),
            })}
          <TypographyComponent className={css(itemTypographyStyles)} color={paragraphColor}>
            {item.label}
          </TypographyComponent>
          <EndWrapper>
            {item?.suffixText && <TypographyComponent color={paragraphColor}>{item.suffixText}</TypographyComponent>}
            {item?.endEnhancer &&
              cloneElement(item.endEnhancer, {
                size: 16,
                className: css(isAreaSelected ? svgActiveStyles : {}),
              })}
          </EndWrapper>
          {item?.isActive && <SeparatorIcon size={20} color={COLORS.gray300} />}
        </LinkComponent>
      </Item>
    );
  }
);

MenuItem.displayName = "MenuItem";
export default MenuItem;
