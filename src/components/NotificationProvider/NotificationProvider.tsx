/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useState } from 'react';
import { Toast } from '../Toast';
import { CreateNotificationData } from './CreateNotificationData';
import { NotificationContainerContext } from './NotificationContext';
import { RenderNotificationData } from './RenderNotificationData';
import { uniqueId } from '../../helpers';

/**
 * Props.
 */
type NotificationProviderProps = {
    children: ReactNode;
    maxNotificationsToShow?: number;
};

/**
 * Actions.
 */
type NotificationActions = {
    create: (data: CreateNotificationData) => void;
    remove: (id: string) => void;
} | null;

/**
 * Export notification actions object outside component to better performance.
 */
export let notificationActions: NotificationActions = null;

/**
 * Notification provider component.
 * Provides notifiation feature through react context for all of its children.
 *
 * @param {NotificationProviderProps} props - Props.
 * @returns React component.
 */
export const NotificationProvider = ({
    children,
    maxNotificationsToShow = 5,
}: NotificationProviderProps): ReactElement => {
    const [queue, setQueue] = useState<RenderNotificationData[]>([]);

    notificationActions = {
        create: (newNotification: CreateNotificationData): void =>
            setQueue([...queue, { ...newNotification, id: uniqueId('notification-') }]),

        remove: (id: string) => setQueue(queue.filter(x => x.id !== id)),
    };

    return (
        <NotificationContainerContext.Provider value={{ queue }}>
            {children}
            <div className="notificationContainer">
                {queue.slice(0, maxNotificationsToShow).map(({ id, ...rest }) => (
                    <Toast
                        key={id}
                        close={(): void => notificationActions?.remove(id)}
                        {...rest}
                    />
                ))}
            </div>
        </NotificationContainerContext.Provider>
    );
};
