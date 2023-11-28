import { createContext } from "react";
import { LegendType } from "./types";

export const createLegendContext = (type: LegendType) => {
  const context = createContext({} as );
  context.displayName = "LegendContext";
  return context;
};
