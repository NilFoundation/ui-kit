import { CodeFieldProps } from "./CodeField";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = (
  code: string,
  onCopy?: CodeFieldProps["onCopy"],
  transformOnCopy?: CodeFieldProps["transformOnCopy"]
) => {
  const onClick = () => {
    const codeToCopy = transformOnCopy ? transformOnCopy(code) : code;
    const result = copy(codeToCopy);

    if (onCopy) {
      onCopy(codeToCopy, result);
    }
  };

  return onClick;
};
