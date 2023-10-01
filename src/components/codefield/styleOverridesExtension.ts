import { EditorView } from "@codemirror/view";

export const styleOverridesExtension = EditorView.theme({
  "&": {
    "&.cm-focused": {
      outline: "none",
    },
  },
});
