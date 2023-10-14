import { createContext } from "react";
import { SeriesApiRef } from "./types";

// generic context for series
export const SeriesContext = createContext({} as SeriesApiRef);
SeriesContext.displayName = "SeriesContext";
