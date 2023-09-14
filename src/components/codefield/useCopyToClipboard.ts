import { CodeFieldProps } from "./CodeField";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = (
  code: string,
  onCopy?: CodeFieldProps["onCopy"],
  beforeCopy?: CodeFieldProps["beforeCopy"]
) => {
  const onClick = () => {
    const codeToCopy = beforeCopy ? beforeCopy(code) : code;
    const result = copy(codeToCopy);

    if (onCopy) {
      onCopy(codeToCopy, result);
    }
  };

  return onClick;
};
