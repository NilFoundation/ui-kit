import { NOTIFICATION_KIND } from "./types";
import { PRIMITIVE_COLORS } from "../../shared";

export const notificationBodyModifiedStyles = {
  [NOTIFICATION_KIND.info]: {
    backgroundColor: PRIMITIVE_COLORS.mono600,
  },
  [NOTIFICATION_KIND.warning]: {
    backgroundColor: PRIMITIVE_COLORS.yellow700,
  },
  [NOTIFICATION_KIND.positive]: {
    backgroundColor: PRIMITIVE_COLORS.green700,
  },
  [NOTIFICATION_KIND.negative]: {
    backgroundColor: PRIMITIVE_COLORS.red700,
  },
};

export const containerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginRight: "16px",
};

export const wrapperStyles = {
  display: "flex",
  alignItems: "flex-start",
};

export const iconStyles = {
  flexShrink: "0",
  marginRight: "16px",
  width: "20px",
  height: "20px",
};

export const buttonWrapperStyles = {
  marginLeft: "16px",
};
