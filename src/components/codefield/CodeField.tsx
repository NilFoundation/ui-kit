import { ForwardRefRenderFunction, HTMLAttributes, forwardRef, memo, useMemo } from "react";
import CodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import { getCodeMirrorTheme } from "./codeMirrorTheme";
import { useStyletron } from "styletron-react";
import { styles as s } from "./styles";
import { getCodeMirrorBasicSetup } from "./codeMirrorBasicSetup";
import { CreateThemeOptions } from "@uiw/codemirror-themes";
import { prefixLineNumberExtension } from "./prefixLineNumberExtension";
import { createDefaultStylesOverridesExtension } from "./defaultStylesOverridesExtension";
import { CopyButton } from "../copy-button";
import { BUTTON_KIND, BUTTON_SIZE } from "../button";
import { CODE_FIELD_SIZE } from "./types";

const MemoizedCopyButton = memo(CopyButton);

export type CodeFieldProps = {
  code: string;
  extensions?: ReactCodeMirrorProps["extensions"];
  themeOverrides?: Partial<CreateThemeOptions>;
  displayCopy?: boolean;
  onCopy?: (code: string) => void;
  transformOnCopy?: (code: string) => string;
  showLineNumbers?: boolean;
  className?: string;
  editable?: ReactCodeMirrorProps["editable"];
  readOnly?: ReactCodeMirrorProps["readOnly"];
  onChange?: ReactCodeMirrorProps["onChange"];
  size?: CODE_FIELD_SIZE;
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
    size = CODE_FIELD_SIZE.medium,
    ...rest
  },
  ref
) => {
  const [css] = useStyletron();
  const styleOverridesExtention = useMemo(
    () => createDefaultStylesOverridesExtension(showLineNumbers),
    [showLineNumbers]
  );
  const mergedExtensions = [styleOverridesExtention, ...extensions];
  const computedCn = className ? `${css(s.getContainerStyles(size))} ${className}` : css(s.getContainerStyles(size));

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
      {displayCopy && (
        <MemoizedCopyButton
          onCopy={onCopy}
          textToCopy={code}
          transformOnCopy={transformOnCopy}
          size={BUTTON_SIZE.default}
          kind={BUTTON_KIND.text}
        />
      )}
    </div>
  );
};

const CodeField = forwardRef(CodeFieldRenderFunction);
CodeField.displayName = "CodeField";

export default CodeField;
