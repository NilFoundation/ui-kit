import { BreadcrumbsOverrides } from "baseui/breadcrumbs";
import BreadcrumbsSeparator from "./ui/BreadcrumbsSeparator";

export const getBreadcrumbsOverrides = (): BreadcrumbsOverrides => {
  return {
    Separator: {
      component: BreadcrumbsSeparator,
    },
    List: {
      style: () => ({
        display: "flex",
        alignItems: "center",
      }),
    },
    ListItem: {
      style: () => {
        return {
          display: "flex",
          alignItems: "center",
        };
      },
    },
  };
};
