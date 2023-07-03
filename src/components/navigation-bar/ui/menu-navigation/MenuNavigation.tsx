import { FC } from "react";
import { getNavigationBurgerStyles, getNavigationListStyles, navigationNavWrapperStyles } from "../../styles";
import NavItem from "./NavItem";
import AuthBlock from "../auth/AuthBlock";
import { Button, BUTTON_SHAPE, BUTTON_SIZE } from "../../../button";
import { MenuIcon } from "../../../icons";
import { NavigationBarProps } from "../../types";
import { useStyletron } from "baseui";

type MenuNavigationProps = Omit<NavigationBarProps, "className" | "brand"> & {
  onDrawerButtonClick?: () => void;
};

const MenuNavigation: FC<MenuNavigationProps> = ({
  username,
  items,
  isAuth,
  onLogin,
  authDropdownContainer,
  onItemClick,
  onDrawerButtonClick,
}) => {
  const [css, theme] = useStyletron();

  const { mediaQuery } = theme;

  return (
    <nav className={css(navigationNavWrapperStyles)}>
      <ul className={css(getNavigationListStyles(mediaQuery))}>
        {items.map((item) => (
          <NavItem key={item.id} item={item} onItemClick={onItemClick} />
        ))}
        <li>
          <AuthBlock
            username={username}
            isAuth={isAuth}
            onLogin={onLogin}
            authDropdownContainer={authDropdownContainer}
          />
        </li>
      </ul>
      <div className={css(getNavigationBurgerStyles(mediaQuery))}>
        <Button onClick={onDrawerButtonClick} size={BUTTON_SIZE.compact} shape={BUTTON_SHAPE.square}>
          <MenuIcon size={24} />
        </Button>
      </div>
    </nav>
  );
};

export default MenuNavigation;
