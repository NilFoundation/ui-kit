import { ModalOverrides } from "baseui/modal";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";
import ModalClose from "./ui/ModalClose";
import { COLORS } from "../../shared";
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
        ...withoutBorderStyles,
        ...expandProperty("padding", "32px 24px 16px"),
        ...($size === "default" ? { width: "500px" } : {}),
        backgroundColor: COLORS.gray800,
        boxSizing: "border-box",
      };
    },
  },
  Close: {
    component: ModalClose,
  },
});
