/**
 * @file Helper function.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

/**
 * Counter.
 */
let counter = 0;

/**
 * Generates a unique Id.
 *
 * @param [prefix = uniqueId-] - Prefix to append to unique id value.
 * @returns - unique Id.
 */
export const uniqueId = (prefix = 'uniqueId-'): string => `${prefix}${++counter}`;
