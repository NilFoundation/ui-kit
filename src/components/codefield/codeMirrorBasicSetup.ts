import { BasicSetupOptions } from "@uiw/react-codemirror";

export const getCodeMirrorBasicSetup = (lineNumbers: boolean): BasicSetupOptions => ({
  lineNumbers,
  highlightActiveLineGutter: false,
  highlightActiveLine: false,
  foldGutter: lineNumbers,
});
