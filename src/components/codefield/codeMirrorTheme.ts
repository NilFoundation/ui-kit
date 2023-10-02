import { createTheme } from "@uiw/codemirror-themes";
import type { CreateThemeOptions } from "@uiw/codemirror-themes";
import { PRIMITIVE_COLORS } from "../../shared";
import { tags as t } from "@lezer/highlight";

const defaultSettings = {
  background: "transparent",
  foreground: PRIMITIVE_COLORS.gray100,
  lineHighlight: "transparent",
  selection: PRIMITIVE_COLORS.gray600,
  selectionMatch: PRIMITIVE_COLORS.gray600,
  fontFamily: "Roboto Mono, monospace",
  caret: PRIMITIVE_COLORS.gray100,
  gutterBackground: "transparent",
} satisfies CreateThemeOptions["settings"];

const defaultStyles = [
  { tag: t.keyword, color: PRIMITIVE_COLORS.purple300 },
  { tag: [t.name, t.deleted, t.character, t.macroName], color: PRIMITIVE_COLORS.gray500 },
  { tag: [t.propertyName], color: PRIMITIVE_COLORS.yellow300 },
  { tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: PRIMITIVE_COLORS.green300 },
  { tag: [t.function(t.variableName), t.labelName], color: PRIMITIVE_COLORS.yellow300 },
  { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: PRIMITIVE_COLORS.green300 },
  { tag: [t.definition(t.name), t.separator], color: PRIMITIVE_COLORS.gray500 },
  { tag: [t.className], color: PRIMITIVE_COLORS.purple300 },
  { tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: PRIMITIVE_COLORS.blue300 },
  { tag: [t.typeName], color: PRIMITIVE_COLORS.green300 },
  { tag: [t.operator, t.operatorKeyword], color: PRIMITIVE_COLORS.purple300 },
  { tag: [t.url, t.escape, t.regexp, t.link], color: PRIMITIVE_COLORS.green300 },
  { tag: [t.meta, t.comment], color: PRIMITIVE_COLORS.gray500 },
  { tag: t.strong, fontWeight: "bold" },
  { tag: t.emphasis, fontStyle: "italic" },
  { tag: t.link, textDecoration: "underline" },
  { tag: t.heading, fontWeight: "bold", color: PRIMITIVE_COLORS.purple300 },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: PRIMITIVE_COLORS.blue300 },
  { tag: t.invalid, color: PRIMITIVE_COLORS.red300 },
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
