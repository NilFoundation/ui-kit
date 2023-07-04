import { FC, ReactNode } from "react";
import { Drawer } from "baseui/drawer";
import { PRIMITIVE_COLORS } from "../../../../shared";
import { useStyletron } from "baseui";
import SideNavigationHeader from "./SideNavigationHeader";
import SideNavigationFooter from "./SideNavigationFooter";
import SideNavigationList from "./SideNavigationList";
import { NavigationItem } from "../../types";
import { expandProperty } from "inline-style-expand-shorthand";

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
}) => {
  const [css] = useStyletron();

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      overrides={{
        DrawerContainer: {
          style: {
            backgroundColor: PRIMITIVE_COLORS.white,
          },
        },
        DrawerBody: {
          style: {
            ...expandProperty("margin", "0"),
            ...expandProperty("padding", "0 16px 16px 16px"),
          },
        },
        Close: {
          component: () => <></>,
        },
      }}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        })}
      >
        <SideNavigationHeader brand={brand} onClose={onClose} />
        {items && <SideNavigationList items={items} onItemClick={onItemClick} />}
        {isAuthVisible && (
          <SideNavigationFooter isAuth={isAuth} onLogin={onLogin} authDropdownContainer={authDropdownContainer} />
        )}
      </div>
    </Drawer>
  );
};

export default NavigationDrawer;
