/**
 * @file Color.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import colors from './scss/colors.module.scss';

// TODO - move to enum after having typescript@5
// see https://github.com/microsoft/TypeScript/pull/50528

/**
 * Theme color scheme.
 */
export const color = {
    primary: colors.primary,
    danger: colors.danger,
    success: colors.success,
    baseColor: colors.baseColor,
    info: colors.info,
    baseDarker: colors.baseDarker,
    baseLight: colors.baseLight,
    secondary: colors.secondary,
    secondaryDarker: colors.secondaryDarker,
};
