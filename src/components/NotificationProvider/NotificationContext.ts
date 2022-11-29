/**
 * @file React context.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { createContext } from 'react';
import { RenderNotificationData } from './RenderNotificationData';

/**
 * Notification сontext type.
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
