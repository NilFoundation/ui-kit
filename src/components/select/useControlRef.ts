import { ControlRef, ImperativeMethods } from "baseui/select";
import { useRef } from "react";

export const useControlRef = (ref: ControlRef | undefined) => {
  const localRef = useRef<ImperativeMethods>(null);

  if (ref === undefined) {
    return localRef;
  }

  return ref;
};
