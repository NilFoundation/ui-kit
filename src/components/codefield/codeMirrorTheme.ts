import { createTheme } from "@uiw/codemirror-themes";
import { PRIMITIVE_COLORS } from "../../shared";

export const codeMirrorTheme = createTheme({
  theme: "dark",
  settings: {
    background: PRIMITIVE_COLORS.gray900,
    foreground: "#75baff",
    caret: "#5d00ff",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: PRIMITIVE_COLORS.gray900,
  },
  styles: [],
});
