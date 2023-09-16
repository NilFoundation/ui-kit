import { ForwardRefRenderFunction, forwardRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { CopyIcon } from "../icons";
import { Button } from "../button";
import { useCopyToClipboard } from "./useCopyToClipboard";
import { Extension } from "@uiw/react-codemirror";
import { codeMirrorTheme } from "./codeMirrorTheme";
import { useStyletron } from "styletron-react";
import { styles as s } from "./styles";

export type CodeFieldProps = {
  code: string;
  synthax: Extension[];
  displayCopy?: boolean;
  onCopy?: (code: string, isCopied: boolean) => void;
  beforeCopy?: (code: string) => string;
};

const CodeFieldRenderFunction: ForwardRefRenderFunction<HTMLDivElement, CodeFieldProps> = (
  { code, synthax, displayCopy = true, onCopy, beforeCopy },
  ref
) => {
  const onCopyIconClick = useCopyToClipboard(code, onCopy, beforeCopy);
  const [css] = useStyletron();

  return (
    <div ref={ref} className={css(s.containerStyles)}>
      {displayCopy && <Button onClick={onCopyIconClick} startEnhancer={<CopyIcon />}></Button>}
      <CodeMirror value={code} readOnly extensions={synthax} theme={codeMirrorTheme} />
    </div>
  );
};

const CodeField = forwardRef(CodeFieldRenderFunction);
CodeField.displayName = "CodeField";

export default CodeField;
