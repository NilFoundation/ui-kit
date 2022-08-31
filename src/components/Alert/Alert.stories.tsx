/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { useState } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Alert } from './Alert';
import { Variant } from '../../enums';

export default {
    component: Alert,
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
        variant: Variant.info,
        onClose: undefined,
    },
} as ComponentMeta<typeof Alert>;

const Template: Story = args => (
    <Alert {...args}>
        {args.text} {args.link && <Alert.Link href={args.link}>{args.link}</Alert.Link>}
    </Alert>
);

export const DefaultAlert = Template.bind({});

export const AlertWithLink = Template.bind({});
AlertWithLink.args = {
    link: 'https://storybook.js.org/',
};

export const ClosableAlert: Story = args => {
    const [visible, setVisible] = useState(true);

    return visible ? (
        <Alert
            {...args}
            onClose={() => setVisible(false)}
        >
            {args.text}
        </Alert>
    ) : (
        <></>
    );
};
