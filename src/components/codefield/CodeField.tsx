import { ForwardRefRenderFunction, HTMLAttributes, forwardRef, useMemo } from "react";
import CodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { getCodeMirrorTheme } from "./codeMirrorTheme";
import { useStyletron } from "styletron-react";
import { styles as s } from "./styles";
import { getCodeMirrorBasicSetup } from "./codeMirrorBasicSetup";
import { CreateThemeOptions } from "@uiw/codemirror-themes";
import { prefixLineNumberExtension } from "./prefixLineNumberExtension";
import { MemoizedCopyButton } from "./CopyButton";
import { useCopyToClipboard } from "./useCopyToClipboard";
import { createDefaultStylesOverridesExtension } from "./defaultStylesOverridesExtension";

export type CodeFieldProps = {
  code: string;
  extensions?: ReactCodeMirrorProps["extensions"];
  themeOverrides?: Partial<CreateThemeOptions>;
  displayCopy?: boolean;
  onCopy?: (code: string, isCopied: boolean) => void;
  transformOnCopy?: (code: string) => string;
  showLineNumbers?: boolean;
  className?: string;
  editable?: ReactCodeMirrorProps["editable"];
  readOnly?: ReactCodeMirrorProps["readOnly"];
  onChange?: ReactCodeMirrorProps["onChange"];
} & HTMLAttributes<HTMLDivElement>;

const CodeFieldRenderFunction: ForwardRefRenderFunction<HTMLDivElement, CodeFieldProps> = (
  {
    code,
    extensions = [],
    themeOverrides,
    displayCopy = true,
    onCopy,
    transformOnCopy,
    showLineNumbers = false,
    className,
    editable = false,
    readOnly = true,
    onChange,
    ...rest
  },
  ref
) => {
  const [css] = useStyletron();
  const copyHandler = useCopyToClipboard(code, onCopy, transformOnCopy);
  const styleOverridesExtention = useMemo(
    () => createDefaultStylesOverridesExtension(showLineNumbers),
    [showLineNumbers]
  );
  const mergedExtensions = [styleOverridesExtention, ...extensions];
  const computedCn = className ? `${css(s.containerStyles)} ${className}` : css(s.containerStyles);

  if (showLineNumbers) {
    mergedExtensions.push(prefixLineNumberExtension);
  }

  return (
    <div ref={ref} className={computedCn} {...rest}>
      <CodeMirror
        value={code}
        readOnly={readOnly}
        editable={editable}
        extensions={mergedExtensions}
        onChange={onChange}
        theme={getCodeMirrorTheme(themeOverrides)}
        basicSetup={getCodeMirrorBasicSetup(showLineNumbers, editable)}
        className={css(s.codemirrorStyles)}
      />
      {displayCopy && <MemoizedCopyButton copyHandler={copyHandler} />}
    </div>
  );
};

const CodeField = forwardRef(CodeFieldRenderFunction);
CodeField.displayName = "CodeField";

export default CodeField;
