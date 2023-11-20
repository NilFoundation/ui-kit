import { BasicSetupOptions } from "@uiw/react-codemirror";

export const getCodeMirrorBasicSetup = (lineNumbers: boolean, isEditable: boolean): BasicSetupOptions => ({
  lineNumbers,
  highlightActiveLineGutter: isEditable && lineNumbers,
  highlightActiveLine: isEditable,
  foldGutter: lineNumbers,
});
