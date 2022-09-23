/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Anchor as AnchorComponent } from '../Anchor';

export default {
    component: AnchorComponent,
    title: 'components/Anchor',
    argTypes: {
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
        iconPosition: {
            control: 'select',
        },
    },
    args: {
        text: 'Some anchor text',
        href: '#some-id',
        iconPosition: 'right',
    },
} as ComponentMeta<typeof AnchorComponent>;

export const Anchor: Story = args => (
    <h1>
        <AnchorComponent {...args}>{args.text}</AnchorComponent>
    </h1>
);
