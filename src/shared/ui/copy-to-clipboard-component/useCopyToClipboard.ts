import { useCallback } from "react";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = (
  text: string,
  onCopy?: (text: string) => void,
  transformOnCopy?: (code: string) => string
) => {
  const onClick = useCallback(() => {
    const textToCopy = transformOnCopy ? transformOnCopy(text) : text;
    const result = copy(textToCopy);

    if (onCopy && result) {
      onCopy(textToCopy);
    }

    return result;
  }, [text, onCopy, transformOnCopy]);

  return onClick;
};
