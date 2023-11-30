import { useState } from "react";
import { mobileScreenMaxWidth } from "./styles";
import { debounce } from "../../shared/utils/debounce";
import { useOnWindowResize } from "../../shared/hooks/useOnWindowResize";

const mediaQueryMobile = window.matchMedia(`(max-width: ${mobileScreenMaxWidth}px)`);

const getisMobile = (): boolean => {
  return mediaQueryMobile.matches;
};

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(getisMobile());

  const resize = debounce(() => {
    const newIsMobileValue = getisMobile();
    isMobile !== newIsMobileValue && setIsMobile(newIsMobileValue);
  }, 100);

  useOnWindowResize(resize);

  return isMobile;
};
