import { ForwardRefRenderFunction, forwardRef } from "react";
import CodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { getCodeMirrorTheme } from "./codeMirrorTheme";
import { useStyletron } from "styletron-react";
import { styles as s } from "./styles";
import { getCodeMirrorBasicSetup } from "./codeMirrorBasicSetup";
import { CreateThemeOptions } from "@uiw/codemirror-themes";
import { prefixLineNumberExtension } from "./prefixLineNumberExtension";
import { MemoizedCopyButton } from "./CopyButton";
import { useCopyToClipboard } from "./useCopyToClipboard";

export type CodeFieldProps = {
  code: string;
  extensions?: ReactCodeMirrorProps["extensions"];
  themeOverrides?: Partial<CreateThemeOptions>;
  displayCopy?: boolean;
  onCopy?: (code: string, isCopied: boolean) => void;
  transformOnCopy?: (code: string) => string;
  showLineNumbers?: boolean;
};

const CodeFieldRenderFunction: ForwardRefRenderFunction<HTMLDivElement, CodeFieldProps> = (
  { code, extensions = [], themeOverrides, displayCopy = true, onCopy, transformOnCopy, showLineNumbers = false },
  ref
) => {
  const [css] = useStyletron();
  const copyHandler = useCopyToClipboard(code, onCopy, transformOnCopy);
  const mergedExtensions = [...extensions];

  if (showLineNumbers) {
    mergedExtensions.push(prefixLineNumberExtension);
  }

  return (
    <div ref={ref} className={css(s.containerStyles)}>
      <CodeMirror
        value={code}
        readOnly
        editable={false}
        extensions={mergedExtensions}
        theme={getCodeMirrorTheme(themeOverrides)}
        basicSetup={getCodeMirrorBasicSetup(showLineNumbers)}
        className={css(s.codemirrorStyles)}
      />
      {displayCopy && <MemoizedCopyButton copyHandler={copyHandler} />}
    </div>
  );
};

const CodeField = forwardRef(CodeFieldRenderFunction);
CodeField.displayName = "CodeField";

export default CodeField;
