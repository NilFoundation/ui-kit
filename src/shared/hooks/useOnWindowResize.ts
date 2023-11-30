import { useEffect, useRef } from "react";

export function useOnWindowResize(callback: () => void) {
  const _useRef = useRef(callback),
    currentCallback = _useRef.current;

  useEffect(function () {
    window.addEventListener("resize", currentCallback);

    return function () {
      window.removeEventListener("resize", currentCallback);
    };
  }, []);
}
