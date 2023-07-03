import { DrawerOverrides } from "baseui/drawer";
import { PRIMITIVE_COLORS } from "../../shared";
import DrawerClose from "./ui/DrawerClose";

export const getDrawerOverrides = (): DrawerOverrides => {
  return {
    DrawerContainer: {
      style: () => ({
        backgroundColor: PRIMITIVE_COLORS.primary800,
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
