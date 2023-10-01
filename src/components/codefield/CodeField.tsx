import { ForwardRefRenderFunction, forwardRef } from "react";
import CodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { CopyIcon } from "../icons";
import { BUTTON_KIND, Button } from "../button";
import { useCopyToClipboard } from "./useCopyToClipboard";
import { getCodeMirrorTheme } from "./codeMirrorTheme";
import { useStyletron } from "styletron-react";
import { styles as s } from "./styles";
import { getCodeMirrorBasicSetup } from "./codeMirrorBasicSetup";
import { getCopyButtonOverrides } from "./overrides";
import { CreateThemeOptions } from "@uiw/codemirror-themes";
import { prefixLineNumberExtension } from "./prefixLineNumberExtension";
import { styleOverridesExtension } from "./styleOverridesExtension";

export type CodeFieldProps = {
  code: string;
  extensions?: ReactCodeMirrorProps["extensions"];
  themeOverrides?: Partial<CreateThemeOptions>;
  displayCopy?: boolean;
  onCopy?: (code: string, isCopied: boolean) => void;
  transformOnCopy?: (code: string) => string;
  showLineNumbers?: boolean;
  editable?: boolean;
  onChange?: ReactCodeMirrorProps["onChange"];
  initialState?: ReactCodeMirrorProps["initialState"];
};

const CodeFieldRenderFunction: ForwardRefRenderFunction<HTMLDivElement, CodeFieldProps> = (
  {
    code,
    extensions = [],
    themeOverrides,
    displayCopy = true,
    onCopy,
    transformOnCopy,
    showLineNumbers = false,
    editable = false,
    onChange,
    initialState,
  },
  ref
) => {
  const onCopyIconClick = useCopyToClipboard(code, onCopy, transformOnCopy);
  const [css] = useStyletron();
  const mergedExtensions = [prefixLineNumberExtension, styleOverridesExtension, ...extensions];

  return (
    <div ref={ref} className={css(s.containerStyles)}>
      <CodeMirror
        value={code}
        readOnly={!editable}
        editable={editable}
        extensions={mergedExtensions}
        theme={getCodeMirrorTheme(themeOverrides)}
        basicSetup={getCodeMirrorBasicSetup(showLineNumbers)}
        className={css(s.codemirrorStyles)}
        onChange={onChange}
        initialState={initialState}
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
