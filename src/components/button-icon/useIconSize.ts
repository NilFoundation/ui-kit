import { ButtonIconSize } from "./types";

export const useIconSize = (size: ButtonIconSize) => {
  switch (size) {
    case "compact":
      return "16px";
    case "default":
      return "16px";
    case "large":
      return "24px";
    default:
      return "16px";
  }
};
