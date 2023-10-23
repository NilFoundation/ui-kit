import { createContext } from "react";
import { SeriesApiRef } from "./types";

export const SeriesContext = createContext({} as SeriesApiRef);
SeriesContext.displayName = "SeriesContext";
