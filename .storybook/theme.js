import { create } from '@storybook/theming';
import { PRIMITIVE_COLORS } from '../src/shared/theme';

export default create({
  base: 'dark',
  colorSecondary: PRIMITIVE_COLORS.primary500,
  appBg: PRIMITIVE_COLORS.primary900,
  appContentBg: PRIMITIVE_COLORS.black,
  appBorderColor: PRIMITIVE_COLORS.primary700,
  appBorderRadius: 4,
  textColor: PRIMITIVE_COLORS.primary50,
  textMutedColor: PRIMITIVE_COLORS.primary300,
  barTextColor: PRIMITIVE_COLORS.primary200,
  barSelectedColor: PRIMITIVE_COLORS.primary50,
  barBg: PRIMITIVE_COLORS.primary900,
  inputBg: PRIMITIVE_COLORS.primary700,
  inputTextColor: PRIMITIVE_COLORS.primary50,
  inputBorderRadius: 0,
  brandTitle: '=nil; Foundation UI kit storybook',
  brandUrl: 'https://nil.foundation',
})
