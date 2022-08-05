/**
 * @file Type declaration.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { Variant } from '../../enums';

/**
 * Data to create notifications.
 */
export type CreateNotificationData = {
    title: string;
    message?: string;
    variant?: Variant
}
