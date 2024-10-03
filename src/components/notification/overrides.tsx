import { ToastOverrides } from "baseui/toast";
import { NOTIFICATION_KIND } from "./types";
import { notificationBodyModifiedStyles } from "./styles";
import { COLORS } from "../../shared";
import { expandProperty } from "inline-style-expand-shorthand";
import { withoutBorderStyles } from "../../shared/styles/borderStyles";

export const getNotificationOverrides = (): ToastOverrides => {
  return {
    Body: {
      style: ({ $kind }) => {
        const modifiedStyles = notificationBodyModifiedStyles?.[$kind as NOTIFICATION_KIND] ?? {};
        return {
          color: COLORS.gray50,
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
