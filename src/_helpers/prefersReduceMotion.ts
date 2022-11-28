/**
 * @file Helper function.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

/**
 * Returns true when user prefers reduce motion.
 *
 * @returns - Is user prefering reduce motion.
 */
export const prefersReduceMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
