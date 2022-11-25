/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { useState } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Alert as AlertComponent } from '../Alert';

export default {
    component: AlertComponent,
    title: 'components/Alert',
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
        onClose: {
            table: {
                disable: true,
            },
        },
        variant: {
            control: 'select',
        },
    },
    args: {
        text: 'This is Alert story',
        variant: 'info',
        onClose: undefined,
    },
} as ComponentMeta<typeof AlertComponent>;

const Template: Story = args => (
    <AlertComponent {...args}>
        {args.text}{' '}
        {args.link && <AlertComponent.Link href={args.link}>{args.link}</AlertComponent.Link>}
    </AlertComponent>
);

export const Alert = Template.bind({});

export const AlertWithLink = Template.bind({});
AlertWithLink.args = {
    link: 'https://storybook.js.org/',
};

export const ClosableAlert: Story = args => {
    const [visible, setVisible] = useState(true);

    return visible ? (
        <AlertComponent
            {...args}
            onClose={() => setVisible(false)}
        >
            {args.text}
        </AlertComponent>
    ) : (
        <></>
    );
};
