/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Badge } from './Badge';
import { Variant } from '../../enums';

export default {
    component: Badge,
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
    },
} as ComponentMeta<typeof Badge>;

export const DefaultBadge: Story = args => <Badge {...args}>{args.text}</Badge>;
DefaultBadge.args = {
    text: 'Badge text',
    variant: Variant.default,
};
