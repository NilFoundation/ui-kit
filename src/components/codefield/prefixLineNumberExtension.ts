import { lineNumbers } from "@codemirror/view";

export const prefixLineNumberExtension = lineNumbers({
  formatNumber: (line: number) => {
    return line < 10 ? `0${line}` : line.toString();
  },
});
