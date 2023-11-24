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
      borderTopLeftRadius: "2px",
      borderBottomLeftRadius: "2px",
    },
    ".cm-activeLine": {
      borderTopRightRadius: "2px",
      borderBottomRightRadius: "2px",
    },
    ".cm-activeLineGutter": {
      color: PRIMITIVE_COLORS.gray200,
    },
    ...(showLineNumbers
      ? {}
      : {
          ".cm-activeLine": {
            borderTopLeftRadius: "2px",
            borderBottomLeftRadius: "2px",
          },
        }),
  });
