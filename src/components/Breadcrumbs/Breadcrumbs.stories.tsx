/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

export default {
    component: Breadcrumbs,
    title: 'components/Breadcrumbs',
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
    },
} as ComponentMeta<typeof Breadcrumbs>;

export const DefaultBreadcrumbs: Story = args => (
    <Breadcrumbs {...args}>
        <Breadcrumbs.Item text="First" />
        <Breadcrumbs.Item text="Second" />
        <Breadcrumbs.Item
            text="Third (active)"
            active
        />
    </Breadcrumbs>
);
