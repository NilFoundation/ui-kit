import { ForwardRefRenderFunction, forwardRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { CopyIcon } from "../icons";
import { BUTTON_KIND, Button } from "../button";
import { useCopyToClipboard } from "./useCopyToClipboard";
import { Extension } from "@uiw/react-codemirror";
import { codeMirrorTheme } from "./codeMirrorTheme";
import { useStyletron } from "styletron-react";
import { styles as s } from "./styles";
import { codeMirrorBasicSetup } from "./codeMirrorBasicSetup";

export type CodeFieldProps = {
  code: string;
  synthax: Extension[];
  displayCopy?: boolean;
  onCopy?: (code: string, isCopied: boolean) => void;
  transformOnCopy?: (code: string) => string;
};

const CodeFieldRenderFunction: ForwardRefRenderFunction<HTMLDivElement, CodeFieldProps> = (
  { code, synthax, displayCopy = true, onCopy, transformOnCopy },
  ref
) => {
  const onCopyIconClick = useCopyToClipboard(code, onCopy, transformOnCopy);
  const [css] = useStyletron();

  return (
    <div ref={ref} className={css(s.containerStyles)}>
      <CodeMirror
        value={code}
        readOnly
        editable={false}
        extensions={synthax}
        theme={codeMirrorTheme}
        basicSetup={codeMirrorBasicSetup}
      />
      {displayCopy && (
        <Button onClick={onCopyIconClick} kind={BUTTON_KIND.tertiary}>
          <CopyIcon />
        </Button>
      )}
    </div>
  );
};

const CodeField = forwardRef(CodeFieldRenderFunction);
CodeField.displayName = "CodeField";

export default CodeField;
