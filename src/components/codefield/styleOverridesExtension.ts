import { EditorView } from "@codemirror/view";

export const styleOverridesExtension = EditorView.baseTheme({
  "&": {
    "&.cm-focused": {
      outline: "none",
    },
  },
});
