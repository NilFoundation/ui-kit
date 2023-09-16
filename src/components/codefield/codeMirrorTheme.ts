import { createTheme } from "@uiw/codemirror-themes";
import { PRIMITIVE_COLORS } from "../../shared";
import { tags as t } from "@lezer/highlight";

export const codeMirrorTheme = createTheme({
  theme: "dark",
  settings: {
    background: PRIMITIVE_COLORS.gray900,
    lineHighlight: PRIMITIVE_COLORS.gray900,
  },
  styles: [
    { tag: t.comment, color: PRIMITIVE_COLORS.gray500 },
    { tag: t.variableName, color: PRIMITIVE_COLORS.blue300 },
    { tag: [t.string, t.special(t.brace)], color: PRIMITIVE_COLORS.blue300 },
    { tag: t.number, color: PRIMITIVE_COLORS.green300 },
    { tag: t.bool, color: PRIMITIVE_COLORS.red300 },
    { tag: t.null, color: PRIMITIVE_COLORS.gray500 },
    { tag: t.keyword, color: PRIMITIVE_COLORS.yellow300 },
    { tag: t.operator, color: PRIMITIVE_COLORS.gray700 },
    { tag: t.className, color: PRIMITIVE_COLORS.gray500 },
    { tag: t.definition(t.typeName), color: PRIMITIVE_COLORS.gray500 },
    { tag: t.typeName, color: PRIMITIVE_COLORS.gray500 },
    { tag: t.angleBracket, color: PRIMITIVE_COLORS.gray500 },
    { tag: t.tagName, color: PRIMITIVE_COLORS.gray500 },
    { tag: t.attributeName, color: PRIMITIVE_COLORS.gray500 },
    { tag: t.meta, color: PRIMITIVE_COLORS.gray500 },
    { tag: t.name, color: PRIMITIVE_COLORS.gray500 },
  ],
});
