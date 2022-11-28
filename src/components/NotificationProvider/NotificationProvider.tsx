/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { createRef, ReactElement, ReactNode, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uniqueId from 'lodash/uniqueId';
import { Toast } from '../Toast';
import { CreateNotificationData } from './CreateNotificationData';
import { NotificationContainerContext } from './NotificationContext';
import { RenderNotificationData } from './RenderNotificationData';
import { Portal } from '../Portal';

/**
 * Props.
 */
type NotificationProviderProps = {
    /**
     * Components children.
     */
    children: ReactNode;
    /**
     * Maximum count of notifications on screen.
     */
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
 * Export notification actions object outside component to prevent update on every render.
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
        create: ({ message, ...rest }: CreateNotificationData): void =>
            setQueue([
                ...queue,
                {
                    ...rest,
                    children: message,
                    id: uniqueId('notification-'),
                    nodeRef: createRef(),
                },
            ]),

        remove: (id: string) => setQueue(queue.filter(x => x.id !== id)),
    };

    return (
        <NotificationContainerContext.Provider value={{ queue }}>
            {children}
            <Portal>
                <TransitionGroup className="notificationContainer">
                    {queue
                        .slice(0, maxNotificationsToShow)
                        .map(({ id, nodeRef, children, ...rest }) => (
                            <CSSTransition
                                key={id}
                                nodeRef={nodeRef}
                                timeout={300}
                                classNames="alert"
                            >
                                <Toast
                                    ref={nodeRef}
                                    close={(): void => notificationActions?.remove(id)}
                                    {...rest}
                                >
                                    {children}
                                </Toast>
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            </Portal>
        </NotificationContainerContext.Provider>
    );
};
