/**
 * @file Type declaration.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { ToastProps } from '../Toast';

/**
 * Data to render notifications.
 */
export type RenderNotificationData = {
    id: string;
} & ToastProps
