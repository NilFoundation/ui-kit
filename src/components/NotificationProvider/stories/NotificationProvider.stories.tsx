/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Args, ComponentMeta, Story } from '@storybook/react';
import {
    NotificationProvider as NotificationProviderComponent,
    notificationActions,
} from '../NotificationProvider';
import { Button } from '../../Button';
import { Variant } from '../../../enums';

export default {
    component: NotificationProviderComponent,
    title: 'components/Notification Provider',
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
        variant: {
            control: 'select',
            options: Object.values(Variant),
        },
    },
    args: {
        maxNotificationsToShow: 5,
        title: 'Notification title',
        message: 'Notification message',
        variant: Variant.info,
    },
} as ComponentMeta<typeof NotificationProviderComponent>;

export const NotificationProvider: Story = ({ title, message, variant, ...rest }: Args) => {
    return (
        <NotificationProviderComponent {...rest}>
            <Button
                onClick={() =>
                    notificationActions?.create({
                        title,
                        message,
                        variant,
                    })
                }
            >
                Create notification
            </Button>
        </NotificationProviderComponent>
    );
};
