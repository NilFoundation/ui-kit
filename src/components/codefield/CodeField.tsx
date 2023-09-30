import { ForwardRefRenderFunction, forwardRef } from "react";
import CodeMirror, { Extension, ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { CopyIcon } from "../icons";
import { BUTTON_KIND, Button } from "../button";
import { useCopyToClipboard } from "./useCopyToClipboard";
import { getCodeMirrorTheme } from "./codeMirrorTheme";
import { useStyletron } from "styletron-react";
import { styles as s } from "./styles";
import { getCodeMirrorBasicSetup } from "./codeMirrorBasicSetup";
import { getCopyButtonOverrides } from "./overrides";
import { CreateThemeOptions } from "@uiw/codemirror-themes";

export type CodeFieldProps = {
  code: string;
  extensions?: Extension[];
  themeOverrides?: Partial<CreateThemeOptions>;
  displayCopy?: boolean;
  onCopy?: (code: string, isCopied: boolean) => void;
  transformOnCopy?: (code: string) => string;
  showLineNumbers?: boolean;
  editable?: boolean;
  onChange?: ReactCodeMirrorProps["onChange"];
};

const CodeFieldRenderFunction: ForwardRefRenderFunction<HTMLDivElement, CodeFieldProps> = (
  {
    code,
    extensions,
    themeOverrides,
    displayCopy = true,
    onCopy,
    transformOnCopy,
    showLineNumbers = false,
    editable = false,
    onChange,
  },
  ref
) => {
  const onCopyIconClick = useCopyToClipboard(code, onCopy, transformOnCopy);
  const [css] = useStyletron();

  return (
    <div ref={ref} className={css(s.containerStyles)}>
      <CodeMirror
        value={code}
        readOnly={!editable}
        editable={editable}
        extensions={extensions}
        theme={getCodeMirrorTheme(themeOverrides)}
        basicSetup={getCodeMirrorBasicSetup(showLineNumbers)}
        className={css(s.codemirrorStyles)}
        onChange={onChange}
      />
      {displayCopy && (
        <Button onClick={onCopyIconClick} kind={BUTTON_KIND.secondary} overrides={getCopyButtonOverrides()}>
          <CopyIcon />
        </Button>
      )}
    </div>
  );
};

const CodeField = forwardRef(CodeFieldRenderFunction);
CodeField.displayName = "CodeField";

export default CodeField;
