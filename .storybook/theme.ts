import { create } from "@storybook/theming/create";
import { PRIMITIVE_COLORS } from "../src/shared/theme";

export default create({
  base: "dark",
  colorSecondary: PRIMITIVE_COLORS.gray500,
  appBg: PRIMITIVE_COLORS.gray900,
  appContentBg: PRIMITIVE_COLORS.black,
  appBorderColor: PRIMITIVE_COLORS.gray700,
  appBorderRadius: 4,
  textColor: PRIMITIVE_COLORS.gray50,
  textMutedColor: PRIMITIVE_COLORS.gray300,
  barTextColor: PRIMITIVE_COLORS.gray200,
  barSelectedColor: PRIMITIVE_COLORS.gray50,
  barBg: PRIMITIVE_COLORS.gray900,
  inputBg: PRIMITIVE_COLORS.gray700,
  inputTextColor: PRIMITIVE_COLORS.gray50,
  inputBorderRadius: 0,
  brandTitle: "=nil; Foundation UI kit storybook",
  brandUrl: "https://nil.foundation",
});
