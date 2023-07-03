import { FC, useState } from "react";
import { useStyletron } from "baseui";
import { getNavigationContainerStyles, navigationWrapperStyles } from "./styles";
import NavigationDrawer from "./ui/side-navigation/NavigationDrawer";
import { NavigationBarProps } from "./types";
import MenuNavigation from "./ui/menu-navigation/MenuNavigation";

const NavigationBar: FC<NavigationBarProps> = ({ brand, className, ...props }) => {
  const [css] = useStyletron();
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <header className={[css(getNavigationContainerStyles()), className].join(" ")}>
      <div className={css(navigationWrapperStyles)}>
        {brand}
        <MenuNavigation {...props} onDrawerButtonClick={() => setDrawerOpen(true)} />
      </div>
      <NavigationDrawer {...props} isOpen={isDrawerOpen} brand={brand} onClose={() => setDrawerOpen(false)} />
    </header>
  );
};

export default NavigationBar;
