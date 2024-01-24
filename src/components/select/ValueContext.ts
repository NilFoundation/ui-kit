import { createContext } from "react";
import { SelectProps } from "./types";

type ValueContextType = {
  setIsOverflow?: (isOverflow: boolean) => void;
  value: SelectProps["value"];
};

const ValueContext = createContext<ValueContextType>({
  setIsOverflow: undefined,
  value: undefined,
});

ValueContext.displayName = "ValueContext";
export default ValueContext;
