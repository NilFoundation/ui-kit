import { ModalOverrides } from "baseui/modal";
import { BorderRadiusStyles } from "../../shared/styles/border";
import ModalClose from "./ui/ModalClose";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

export const getModalOverrides = (): ModalOverrides => ({
  Root: {
    style: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 100,
    },
  },
  Dialog: {
    style: {
      ...BorderRadiusStyles,
      ...expandProperty("padding", "32px 24px 16px"),
      backgroundColor: PRIMITIVE_COLORS.primary800,
      width: "500px",
      boxSizing: "border-box",
    },
  },
  Close: {
    component: ModalClose,
  },
});
