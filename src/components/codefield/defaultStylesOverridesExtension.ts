import { EditorView } from "@codemirror/view";
import { PRIMITIVE_COLORS } from "../../shared";

export const createDefaultStylesOverridesExtension = (showLineNumbers: boolean) =>
  EditorView.theme({
    ".cm-lineNumbers .cm-gutterElement": {
      paddingLeft: "8px",
      minWidth: "29px",
    },
    ".cm-foldGutter .cm-gutterElement": {
      width: "12px",
    },
    ".cm-lineNumbers .cm-activeLineGutter": {
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
    },
    ".cm-activeLine": {
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
      ...(showLineNumbers
        ? {}
        : {
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          }),
    },
    ".cm-activeLineGutter": {
      color: PRIMITIVE_COLORS.gray200,
    },
  });
