import { FC, ReactNode, useState } from "react";
import { LabelSmall } from "baseui/typography";
import { PRIMITIVE_COLORS } from "../../../../shared";
import { useStyletron } from "baseui";
import NavPopover from "../NavPopover";
import { Menu } from "../../../menu";
import { CaretDownIcon, CaretUpIcon } from "../../../icons";
import { NavigationItem } from "../../types";
import { getListItemStyles, getButtonStyles } from "./styles";
import { StyledLink } from "baseui/link";

type NavItemProps = {
  item: NavigationItem;
  onItemClick?: (item: NavigationItem) => void;
  itemAs?: (item: NavigationItem) => ReactNode;
};

const getItemAsValue = (itemAs: (item: NavigationItem) => ReactNode, item: NavigationItem) => {
  return typeof itemAs === "function" ? itemAs(item) : itemAs;
};

const NavItem: FC<NavItemProps> = ({ item, onItemClick, itemAs }) => {
  const [css] = useStyletron();
  const [isOpen, setOpen] = useState(false);

  const { label } = item;
  const isSelected = !!item?.isSelected;
  const disabled = !!item?.disabled;
  const children = item?.children ?? [];

  const listItemStyles = getListItemStyles(isSelected, disabled);

  const onClickHandler = () => {
    if (children.length > 0 || disabled) {
      return;
    }
    onItemClick?.(item);
  };

  const listItemProps = {
    className: css(listItemStyles),
    color: listItemStyles.color,
    onClick: onClickHandler,
  };

  const iconProps = {
    className: css({
      marginLeft: "4px",
    }),
    color: disabled ? PRIMITIVE_COLORS.primary300 : PRIMITIVE_COLORS.primary800,
    size: 16,
  };

  if (itemAs && children.length === 0) {
    return (
      <LabelSmall {...listItemProps} as="li">
        {getItemAsValue(itemAs, item)}
      </LabelSmall>
    );
  }

  return (
    <LabelSmall {...listItemProps} as="li">
      {children.length > 0 ? (
        <NavPopover
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          popoverMargin={20}
          content={
            <Menu
              isLight
              items={children.map((menuItem) => ({
                ...menuItem,
                label: itemAs ? getItemAsValue(itemAs, menuItem) : menuItem.label,
              }))}
              onItemSelect={(data) => onItemClick?.(data?.item)}
            />
          }
        >
          <button disabled={disabled} className={css(getButtonStyles(isSelected, disabled))} tabIndex={0}>
            {label}
            {isOpen ? <CaretUpIcon {...iconProps} /> : <CaretDownIcon {...iconProps} />}
          </button>
        </NavPopover>
      ) : (
        <>
          {item?.href ? (
            <StyledLink className={css(listItemStyles)} href={!item?.disabled ? item.href : undefined}>
              {label}
            </StyledLink>
          ) : (
            label
          )}
        </>
      )}
    </LabelSmall>
  );
};

export default NavItem;
