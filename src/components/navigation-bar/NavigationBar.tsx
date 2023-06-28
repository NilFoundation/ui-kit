import { FC, useState } from "react";
import { useStyletron } from "baseui";
import {
  getNavigationBurgerStyles,
  getNavigationContainerStyles,
  getNavigationListStyles,
  navigationNavWrapperStyles,
  navigationWrapperStyles,
} from "./styles";
import AuthItem from "./ui/auth/AuthItem";
import { Button, BUTTON_SHAPE, BUTTON_SIZE } from "../button";
import { MenuIcon } from "../icons";
import NavigationDrawer from "./ui/side-navigation/NavigationDrawer";
import NavItem from "./ui/NavItem";
import { NavigationBarProps } from "./types";

const NavigationBar: FC<NavigationBarProps> = ({
  brand,
  items,
  isAuth,
  onLogin,
  authDropdownContainer,
  username,
  onItemClick,
  className,
}) => {
  const [css, theme] = useStyletron();
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const { mediaQuery } = theme;

  return (
    <div className={[css(getNavigationContainerStyles()), className].join(" ")}>
      <div className={css(navigationWrapperStyles)}>
        {brand}
        <nav className={css(navigationNavWrapperStyles)}>
          <ul className={css(getNavigationListStyles(mediaQuery))}>
            {items.map((item) => (
              <NavItem key={item.id} item={item} onItemClick={onItemClick} />
            ))}
            <li>
              <AuthItem
                username={username}
                isAuth={isAuth}
                onLogin={onLogin}
                authDropdownContainer={authDropdownContainer}
              />
            </li>
          </ul>
          <div className={css(getNavigationBurgerStyles(mediaQuery))}>
            <Button onClick={() => setDrawerOpen(true)} size={BUTTON_SIZE.compact} shape={BUTTON_SHAPE.square}>
              <MenuIcon size={24} />
            </Button>
          </div>
        </nav>
      </div>
      <NavigationDrawer
        items={items}
        authDropdownContainer={authDropdownContainer}
        isAuth={isAuth}
        onLogin={onLogin}
        onItemClick={onItemClick}
        isOpen={isDrawerOpen}
        brand={brand}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
};

export default NavigationBar;
