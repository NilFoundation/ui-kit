import { ForwardRefRenderFunction, forwardRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { useForwardedRef } from "./useForwardedRef";
import { CopyIcon } from "../icons";
import { Button } from "../button";
import { useCopyToClipboard } from "./useCopyToClipboard";

export type CodeFieldProps = {
  code: string;
  lang: string;
  displayCopy?: boolean;
  onCopy?: (code: string, isCopied: boolean) => void;
  beforeCopy?: (code: string) => string;
};

const CodeFieldRenderFunction: ForwardRefRenderFunction<HTMLDivElement, CodeFieldProps> = (
  { code, lang, displayCopy = true, onCopy, beforeCopy },
  ref
) => {
  const computedRef = useForwardedRef(ref);
  const onCopyIconClick = useCopyToClipboard(code, onCopy, beforeCopy);

  return (
    <div className="code-field" ref={computedRef}>
      {displayCopy && <Button onClick={onCopyIconClick} startEnhancer={<CopyIcon />}></Button>}
      <CodeMirror value={code} />
    </div>
  );
};

const CodeField = forwardRef(CodeFieldRenderFunction);
CodeField.displayName = "CodeField";

export default CodeField;
