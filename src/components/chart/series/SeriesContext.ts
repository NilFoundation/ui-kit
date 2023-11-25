import { createContext } from "react";
import { SeriesApiRef, SeriesType } from "./types";

export const createSeriesContext = <T extends SeriesType>() => {
  const context = createContext({} as SeriesApiRef<T>);
  context.displayName = "SeriesContext";
  return context;
};
