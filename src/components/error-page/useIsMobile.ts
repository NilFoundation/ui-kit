import { useLayoutEffect, useState } from "react";
import { mobileScreenMaxWidth } from "./styles";

const getUniversalMediaQueryMobile = () => {
  return window.matchMedia(`(max-width: ${mobileScreenMaxWidth}px)`);
};

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useLayoutEffect(() => {
    const mediaQueryMobile = getUniversalMediaQueryMobile();

    if (!mediaQueryMobile) {
      return;
    }

    const listener = () => {
      setIsMobile(mediaQueryMobile.matches);
    };

    mediaQueryMobile.addEventListener("change", listener);

    return () => {
      mediaQueryMobile.removeEventListener("change", listener);
    };
  }, []);

  return isMobile;
};
