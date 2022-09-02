/**
 * @file Type declaration.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { Size } from '../enums';

/**
 * Input size type.
 */
export type InputSize = Exclude<Size, Size.xs>;
