import { createTheme } from "@uiw/codemirror-themes";
import type { CreateThemeOptions } from "@uiw/codemirror-themes";
import { COLORS } from "../../shared";
import { tags as t } from "@lezer/highlight";

const defaultSettings = {
  background: "transparent",
  foreground: COLORS.gray100,
  // make line half transparent to allow selection highlight
  lineHighlight: COLORS.gray700 + "80",
  selection: COLORS.blue200,
  selectionMatch: COLORS.gray600,
  fontFamily: "Roboto Mono, monospace",
  caret: COLORS.gray100,
  gutterForeground: COLORS.gray300,
} satisfies CreateThemeOptions["settings"];

const defaultStyles = [
  { tag: t.keyword, color: COLORS.purple300 },
  { tag: [t.deleted, t.character], color: COLORS.gray500 },
  { tag: [t.name, t.macroName], color: COLORS.gray50 },
  { tag: [t.propertyName], color: COLORS.yellow300 },
  { tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: COLORS.green300 },
  { tag: [t.function(t.variableName), t.labelName], color: COLORS.yellow300 },
  { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: COLORS.green300 },
  { tag: [t.definition(t.name), t.separator], color: COLORS.gray500 },
  { tag: [t.className], color: COLORS.purple300 },
  { tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: COLORS.blue400 },
  { tag: [t.typeName], color: COLORS.green300 },
  { tag: [t.operator, t.operatorKeyword], color: COLORS.blue200 },
  { tag: [t.url, t.escape, t.regexp, t.link], color: COLORS.green300 },
  { tag: [t.meta, t.comment], color: COLORS.gray500 },
  { tag: t.strong, fontWeight: "bold" },
  { tag: t.emphasis, fontStyle: "italic" },
  { tag: t.link, textDecoration: "underline" },
  { tag: t.heading, fontWeight: "bold", color: COLORS.purple300 },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: COLORS.blue400 },
  { tag: t.invalid, color: COLORS.red300 },
  { tag: t.strikethrough, textDecoration: "line-through" },
] satisfies CreateThemeOptions["styles"];

export const getCodeMirrorTheme = ({
  theme = "dark",
  settings = {},
  styles = [],
}: Partial<CreateThemeOptions> = {}) => {
  return createTheme({
    theme,
    settings: {
      ...defaultSettings,
      ...settings,
    },
    styles: [...defaultStyles, ...styles],
  });
};
