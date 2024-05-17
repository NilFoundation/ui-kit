import { cloneElement, forwardRef } from "react";
import { MENU_SIZE, MenuItemTypographyProps } from "../types";
import { LabelSmall, LabelMedium, LabelLarge } from "baseui/typography";
import { useStyletron, styled } from "baseui";
import { Checkbox } from "../../checkbox";
import {
  getItemContainerStyles,
  getLinkComponentStyles,
  ItemEndWrapperStyles,
  itemTypographyStyles,
  svgStyles,
} from "../styles";
import { CheckmarkIcon } from "../../icons";
import { COLORS } from "../../../shared";
import { getCustomLinkComponent } from "../../../shared/ui/getCustomLinkComponent";
import { MenuItemComponentProps } from "./types";

const paragraphComponent = {
  [MENU_SIZE.small]: (props: MenuItemTypographyProps) => <LabelSmall as="div" {...props} />,
  [MENU_SIZE.medium]: (props: MenuItemTypographyProps) => <LabelMedium as="div" {...props} />,
  [MENU_SIZE.large]: (props: MenuItemTypographyProps) => <LabelLarge as="div" {...props} />,
};

const iconSizeMap = {
  [MENU_SIZE.small]: 16,
  [MENU_SIZE.medium]: 24,
  [MENU_SIZE.large]: 32,
};

const MenuItem = forwardRef<HTMLLIElement, MenuItemComponentProps>(
  ({ size, item, onClick, disabled, onMouseEnter, id, isDropdownItem }, ref) => {
    const [css] = useStyletron();

    const isSelected = item.selected && !disabled;
    const Item = styled(
      "li",
      getItemContainerStyles(size, !!disabled, !!item.isHighlighted, !!isSelected, !!item.isActive, isDropdownItem)
    );
    const EndWrapper = styled("span", ItemEndWrapperStyles);
    const TypographyComponent = paragraphComponent[size];
    const LinkComponent = getCustomLinkComponent(item.linkComponent, item.href);

    return (
      <Item ref={ref} onMouseEnter={onMouseEnter} id={id ?? undefined} onClick={onClick}>
        <LinkComponent className={css(getLinkComponentStyles(size))}>
          {item?.selected != null && <Checkbox checked={item.selected} />}
          {item?.startEnhancer &&
            cloneElement(item.startEnhancer, {
              size: iconSizeMap[size],
              className: css(svgStyles),
            })}
          <TypographyComponent className={css(itemTypographyStyles)} color="inherit">
            {item.label}
          </TypographyComponent>
          <EndWrapper>
            {item?.suffixText && <TypographyComponent color="inherit">{item.suffixText}</TypographyComponent>}
            {item?.endEnhancer &&
              cloneElement(item.endEnhancer, {
                size: iconSizeMap[size],
                className: css(svgStyles),
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
