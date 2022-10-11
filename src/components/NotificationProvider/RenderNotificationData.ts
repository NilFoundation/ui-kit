/**
 * @file Type declaration.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { RefObject } from 'react';
import { ToastProps } from '../Toast';

/**
 * Data to render notifications.
 */
export type RenderNotificationData = {
    id: string;
    nodeRef: RefObject<HTMLDivElement>;
} & ToastProps;
