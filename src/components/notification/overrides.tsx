import { ToastOverrides } from "baseui/toast";
import { NOTIFICATION_KIND } from "./types";
import { notificationBodyModifiedStyles } from "./styles";
import { PRIMITIVE_COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";

export const getNotificationOverrides = (): ToastOverrides => {
  return {
    Body: {
      style: ({ $kind }) => {
        const modifiedStyles = notificationBodyModifiedStyles?.[$kind as NOTIFICATION_KIND] ?? {};
        return {
          color: PRIMITIVE_COLORS.white,
          ...withoutBorderStyles,
          ...expandProperty("padding", "16px 20px"),
          ...modifiedStyles,
        };
      },
    },
    CloseIcon: {
      props: {
        size: "20px",
      },
    },
  };
};
