import { useEffect, useState } from "react";
import { mobileScreenMaxWidth } from "./styles";

const mediaQueryMobile = window.matchMedia(`(max-width: ${mobileScreenMaxWidth}px)`);

const getisMobile = (): boolean => {
  return mediaQueryMobile.matches;
};

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(getisMobile());

  useEffect(() => {
    const resize = () => {
      const newIsMobileValue = getisMobile();
      isMobile !== newIsMobileValue && setIsMobile(newIsMobileValue);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [isMobile]);

  return isMobile;
};
