import { FC, useState } from "react";
import { LabelSmall } from "baseui/typography";
import { PRIMITIVE_COLORS } from "../../../shared";
import { useStyletron } from "baseui";
import NavPopover from "./NavPopover";
import { Menu } from "../../menu";
import { CaretDownIcon, CaretUpIcon } from "../../icons";
import { NavigationItem } from "../types";

type NavItemProps = {
  item: NavigationItem;
  onItemClick?: (item: NavigationItem) => void;
};

const getButtonStyles = (isSelected: boolean) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  background: "none",
  outline: "none",
  color: isSelected ? PRIMITIVE_COLORS.primary500 : PRIMITIVE_COLORS.primary800,
  cursor: "pointer",

  ":hover": {
    color: PRIMITIVE_COLORS.primary600,
  },

  ":focus": {
    color: PRIMITIVE_COLORS.primary500,
  },
});

const NavItem: FC<NavItemProps> = ({ item, onItemClick }) => {
  const [css] = useStyletron();
  const [isOpen, setOpen] = useState(false);

  const { label } = item;
  const children = item?.children ?? [];

  const iconProps = {
    className: css({
      marginLeft: "4px",
    }),
    color: PRIMITIVE_COLORS.primary800,
    size: 16,
  };

  const onClickHandler = () => {
    if (children.length > 0) {
      return;
    }
    onItemClick?.(item);
  };

  return (
    <li
      className={css({
        display: "flex",
        alignItems: "center",
      })}
    >
      {children.length > 0 ? (
        <NavPopover
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          popoverMargin={20}
          content={<Menu isLight items={children} onItemSelect={(data) => onItemClick?.(data?.item)} />}
        >
          <button className={css(getButtonStyles(!!item?.isSelected))} tabIndex={0}>
            <LabelSmall as="span" color="inherit">
              {label}
            </LabelSmall>
            {isOpen ? <CaretUpIcon {...iconProps} /> : <CaretDownIcon {...iconProps} />}
          </button>
        </NavPopover>
      ) : (
        <button className={css(getButtonStyles(!!item?.isSelected))} onClick={onClickHandler} tabIndex={0}>
          <LabelSmall as="span" color="inherit">
            {label}
          </LabelSmall>
        </button>
      )}
    </li>
  );
};

export default NavItem;
