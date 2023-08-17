import { FC, ReactNode } from "react";
import { Drawer } from "baseui/drawer";
import { useStyletron } from "baseui";
import SideNavigationHeader from "./SideNavigationHeader";
import SideNavigationFooter from "./SideNavigationFooter";
import SideNavigationList from "./SideNavigationList";
import { NavigationItem } from "../../types";
import { getDrawerOverrides } from "./overrides";

type NavigationDrawerProps = {
  onClose?: ((a: { closeSource?: "closeButton" | "backdrop" | "escape" | undefined }) => unknown) | undefined;
  isOpen?: boolean;
  isAuth?: boolean;
  onItemClick?: (item: NavigationItem) => void;
  onLogin?: () => void;
  brand?: ReactNode;
  isAuthVisible?: ReactNode;
  items?: Array<NavigationItem>;
  authDropdownContainer?: ReactNode;
  itemAs?: (item: NavigationItem) => ReactNode;
};

const NavigationDrawer: FC<NavigationDrawerProps> = ({
  brand,
  items,
  onItemClick,
  isAuth,
  onClose,
  isAuthVisible,
  onLogin,
  isOpen,
  authDropdownContainer,
  itemAs,
}) => {
  const [css] = useStyletron();

  const drawerOverrides = getDrawerOverrides();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="full" overrides={drawerOverrides}>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        })}
      >
        <SideNavigationHeader brand={brand} onClose={onClose} />
        {items && <SideNavigationList items={items} onItemClick={onItemClick} itemAs={itemAs} />}
        {isAuthVisible && (
          <SideNavigationFooter isAuth={isAuth} onLogin={onLogin} authDropdownContainer={authDropdownContainer} />
        )}
      </div>
    </Drawer>
  );
};

export default NavigationDrawer;
