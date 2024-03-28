import { useCallback } from "react";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = (
  code: string,
  onCopy?: (code: string) => void,
  transformOnCopy?: (code: string) => string
) => {
  const onClick = useCallback(() => {
    const codeToCopy = transformOnCopy ? transformOnCopy(code) : code;
    const result = copy(codeToCopy);

    if (onCopy && result) {
      onCopy(codeToCopy);
    }

    return result;
  }, [code, onCopy, transformOnCopy]);

  return onClick;
};
