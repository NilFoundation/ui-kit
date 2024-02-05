import { useEffect, useRef, useState } from "react";
import { SelectProps } from "../../types";
import { useOnWindowResize } from "../../../../shared/hooks/useOnWindowResize";

export const useHiddenInput = (value: SelectProps["value"]) => {
  const [isHiddenInputOverflow, setIsHiddenInputOverflow] = useState(false);
  const [mockInputWidth, setMockInputWidth] = useState(0);
  const hiddenInputRef = useRef<HTMLDivElement>(null);
  const mockInputRef = useRef<HTMLDivElement>(null);

  const getIsOverflow = () => {
    if (!hiddenInputRef.current) {
      return false;
    }
    return hiddenInputRef.current.scrollWidth > hiddenInputRef.current.clientWidth;
  };

  const getHiddenInputWidth = () => {
    const minWidth = 150;
    if (!hiddenInputRef.current) {
      return minWidth;
    }
    return hiddenInputRef.current.clientWidth > minWidth ? hiddenInputRef.current.clientWidth : minWidth;
  };

  useEffect(() => {
    setIsHiddenInputOverflow(getIsOverflow());
    setMockInputWidth(getHiddenInputWidth());
  }, [value]);

  useOnWindowResize(() => {
    setIsHiddenInputOverflow(getIsOverflow());
    setMockInputWidth(getHiddenInputWidth());
  });

  return { hiddenInputRef, mockInputRef, isHiddenInputOverflow, mockInputWidth };
};
