/**
 * @file React context.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { createContext } from 'react';
import { RenderNotificationData } from './RenderNotificationData';

/**
 * Context type.
 */
type NotificationContainerContextModel = {
    queue: RenderNotificationData[];
};

/**
 * Notification context.
 */
export const NotificationContainerContext = createContext<NotificationContainerContextModel>(
    {} as NotificationContainerContextModel,
);
