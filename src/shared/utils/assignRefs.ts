import { Ref } from "react";

export const assignRefs = <T>(...refs: Ref<T | null>[]) => {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        // @ts-ignore
        ref.current = node;
      }
    });
  };
};
