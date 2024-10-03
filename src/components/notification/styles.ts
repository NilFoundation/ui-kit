import { NOTIFICATION_KIND } from "./types";
import { COLORS } from "../../shared";

export const notificationBodyModifiedStyles = {
  [NOTIFICATION_KIND.info]: {
    backgroundColor: COLORS.gray700,
  },
  [NOTIFICATION_KIND.warning]: {
    backgroundColor: COLORS.yellow700,
  },
  [NOTIFICATION_KIND.positive]: {
    backgroundColor: COLORS.green700,
  },
  [NOTIFICATION_KIND.negative]: {
    backgroundColor: COLORS.red700,
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
