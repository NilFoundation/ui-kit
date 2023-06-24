import { ToastOverrides } from "baseui/toast";
import { NOTIFICATION_KIND } from "./types";
import { notificationBodyModifiedStyles } from "./styles";
import { PRIMITIVE_COLORS } from "../../shared";

export const getNotificationOverrides = (): ToastOverrides => {
  return {
    Body: {
      style: ({ $kind }) => {
        const modifiedStyles = notificationBodyModifiedStyles?.[$kind as NOTIFICATION_KIND] ?? {};
        return {
          color: PRIMITIVE_COLORS.white,
          borderBottomLeftRadius: "0",
          borderTopLeftRadius: "0",
          borderBottomRightRadius: "0",
          borderTopRightRadius: "0",
          paddingTop: "16px",
          paddingBottom: "16px",
          paddingLeft: "20px",
          paddingRight: "20px",
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
