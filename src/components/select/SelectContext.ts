import { createContext } from "react";
import { SelectProps } from "./types";
import { ControlRef } from "baseui/select";

type SelectContextType = {
  setIsOverflow?: (isOverflow: boolean) => void;
  value: SelectProps["value"];
  controlRef?: ControlRef;
};

const SelectContext = createContext<SelectContextType>({
  setIsOverflow: undefined,
  value: undefined,
  controlRef: undefined,
});

SelectContext.displayName = "SelectContext";
export default SelectContext;
