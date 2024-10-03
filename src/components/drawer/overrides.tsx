import { DrawerOverrides } from "baseui/drawer";
import { COLORS } from "../../shared";
import DrawerClose from "./ui/DrawerClose";

export const getDrawerOverrides = (): DrawerOverrides => {
  return {
    DrawerContainer: {
      style: () => ({
        backgroundColor: COLORS.gray800,
      }),
    },
    Backdrop: {
      style: () => ({
        backgroundColor: "rgba(0, 0, 0, 0.50)",
      }),
    },
    Close: {
      component: DrawerClose,
    },
  };
};
