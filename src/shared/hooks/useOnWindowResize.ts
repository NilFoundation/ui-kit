import { useEffect, useRef } from "react";
import { isBrowser } from "../utils/isBrowser";

export function useOnWindowResize(callback: () => void) {
  const _useRef = useRef(callback),
    currentCallback = _useRef.current;

  useEffect(function () {
    currentCallback();

    if (!isBrowser()) {
      return;
    }

    window.addEventListener("resize", currentCallback);
    return function () {
      window.removeEventListener("resize", currentCallback);
    };
  }, []);
}
