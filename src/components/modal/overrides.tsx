import { ModalOverrides } from "baseui/modal";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";
import ModalClose from "./ui/ModalClose";
import { COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";

export const getModalOverrides = (): ModalOverrides => ({
  Root: {
    style: {
      backgroundColor: "rgba(15, 15, 15, 0.7)",
    },
  },
  Dialog: {
    style: ({ $size }) => {
      return {
        ...withoutBorderStyles,
        ...expandProperty("padding", "24px"),
        ...($size === "default" ? { width: "374px" } : {}),
        backgroundColor: COLORS.gray900,
        boxSizing: "border-box",
      };
    },
  },
  Close: {
    component: ModalClose,
  },
});
