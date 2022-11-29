/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { useState } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Toast as ToastComponent } from '../Toast';

export default {
    component: ToastComponent,
    title: 'components/Toast',
    argTypes: {
        text: {
            type: 'string',
        },
        children: {
            table: {
                disable: true,
            },
        },
        className: {
            table: {
                disable: true,
            },
        },
        close: {
            table: {
                disable: true,
            },
        },
        variant: {
            control: 'select',
        },
    },
    args: {
        text: 'This is Toast story',
        title: 'Simple toast',
        autoClose: false,
    },
} as ComponentMeta<typeof ToastComponent>;

export const Toast: Story = args => {
    const [visible, setVisible] = useState(true);

    return (
        <>
            {visible && (
                <ToastComponent
                    {...args}
                    title={args.title}
                    close={() => setVisible(false)}
                >
                    {args.text}
                </ToastComponent>
            )}
        </>
    );
};
