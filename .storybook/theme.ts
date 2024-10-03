import { create } from "@storybook/theming/create";
import { COLORS } from "../src/shared/theme";

export default create({
  base: "dark",
  colorSecondary: COLORS.gray500,
  appBg: COLORS.gray900,
  appContentBg: COLORS.black,
  appBorderColor: COLORS.gray700,
  appBorderRadius: 4,
  textColor: COLORS.gray50,
  textMutedColor: COLORS.gray300,
  barTextColor: COLORS.gray200,
  barSelectedColor: COLORS.gray50,
  barBg: COLORS.gray900,
  inputBg: COLORS.gray700,
  inputTextColor: COLORS.gray50,
  inputBorderRadius: 0,
  brandTitle: "=nil; Foundation UI kit storybook",
  brandUrl: "https://nil.foundation",
});
