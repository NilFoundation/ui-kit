import { useEffect, useRef, useState } from "react";
import { SelectProps } from "../../types";
import { useOnWindowResize } from "../../../../shared/hooks/useOnWindowResize";

export const useOverflow = (value: SelectProps["value"]) => {
  const [isOverflow, setIsOverflow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getIsOverflow = () => {
    if (!ref.current) {
      return false;
    }
    return ref.current.scrollWidth > ref.current.clientWidth;
  };

  useEffect(() => {
    setIsOverflow && setIsOverflow(getIsOverflow());
  }, [value, setIsOverflow]);

  useOnWindowResize(() => {
    setIsOverflow(getIsOverflow());
  });

  return { ref, isOverflow };
};
