import React, { cloneElement, createElement, forwardRef, Fragment, ReactElement, ReactNode, useMemo } from "react";
import { MENU_SIZE, MenuItemProps, MenuItemTypographyProps } from "../types";
import { ParagraphSmall, ParagraphMedium, ParagraphLarge } from "baseui/typography";
import { useStyletron, styled } from "baseui";
import { SPINNER_SIZE } from "../../spinner";
import { Checkbox } from "../../checkbox";
import { getItemContainerStyles, ItemEndWrapperStyles, itemTypographyStyles, svgActiveStyles } from "../styles";
import { SeparatorIcon } from "../../icons";
import { PRIMITIVE_COLORS } from "../../../shared";
import { isExternalLink } from "../../../shared/utils/isExternalLink";

const paragraphComponent = {
  [MENU_SIZE.small]: (props) => <ParagraphSmall as="div" {...props} />,
  [SPINNER_SIZE.medium]: (props) => <ParagraphMedium as="div" {...props} />,
  [SPINNER_SIZE.large]: (props) => <ParagraphLarge as="div" {...props} />,
} satisfies Record<MENU_SIZE, (p: MenuItemTypographyProps) => ReactNode>;

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  (
    {
      selected,
      suffixText,
      startEnhancer,
      endEnhancer,
      isActive,
      size,
      ariaSelected,
      label,
      disabled,
      isFocused,
      isHighlighted,
      onClick,
      onMouseEnter,
      resetMenu,
      id,
      href,
      linkComponent,
      ...linkComponentProps
    },
    ref
  ) => {
    const [css] = useStyletron();

    const isAreaSelected = ariaSelected && !disabled;
    const Item = styled("li", getItemContainerStyles(size, !!disabled, !!isHighlighted, !!ariaSelected));
    const EndWrapper = styled("span", ItemEndWrapperStyles);
    const TypographyComponent = paragraphComponent[size];
    const LinkComponent = useMemo(() => {
      if (linkComponent) {
        return () =>
          cloneElement(linkComponent as any, {
            href,
            ...linkComponentProps,
          });
      }

      if (href) {
        return () =>
          createElement("a", {
            href,
            ...(isExternalLink(href) ? { rel: "noopener noreferrer" } : {}),
          });
      }

      return Fragment;
    }, [linkComponent, linkComponentProps, href]);

    return (
      <Item ref={ref} onMouseEnter={onMouseEnter} id={id ?? undefined} onClick={onClick}>
        <LinkComponent>
          {selected && <Checkbox checked={selected} />}
          {startEnhancer &&
            cloneElement(startEnhancer as ReactElement, {
              size: 16,
              className: css(isAreaSelected ? svgActiveStyles : {}),
            })}
          <TypographyComponent className={css(itemTypographyStyles)}>{label}</TypographyComponent>
          <EndWrapper>
            {suffixText && <TypographyComponent>{suffixText}</TypographyComponent>}
            {endEnhancer &&
              React.cloneElement(endEnhancer as ReactElement, {
                size: 20,
                className: css(isAreaSelected ? svgActiveStyles : {}),
              })}
          </EndWrapper>
          {isActive && <SeparatorIcon size={20} color={PRIMITIVE_COLORS.gray300} />}
        </LinkComponent>
      </Item>
    );
  }
);

MenuItem.displayName = "MenuItem";
export default MenuItem;
