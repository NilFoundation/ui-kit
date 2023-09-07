import { ModalOverrides } from "baseui/modal";
import { BorderRadiusStyles } from "../../shared/styles/border";
import ModalClose from "./ui/ModalClose";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

export const getModalOverrides = (): ModalOverrides => ({
  Root: {
    style: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  },
  Dialog: {
    style: ({ $size }) => {
      return {
        ...BorderRadiusStyles,
        ...expandProperty("padding", "32px 24px 16px"),
        ...($size === "default" ? { width: "500px" } : {}),
        backgroundColor: PRIMITIVE_COLORS.gray800,
        boxSizing: "border-box",
      };
    },
  },
  Close: {
    component: ModalClose,
  },
});
