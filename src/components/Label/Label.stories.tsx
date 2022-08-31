/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Label } from './Label';
import { Variant } from '../../enums';

export default {
    component: Label,
    title: 'components/Label',
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
} as ComponentMeta<typeof Label>;

export const DefaultLabel: Story = args => <Label {...args}>{args.text}</Label>;
DefaultLabel.args = {
    text: 'Label text',
    variant: Variant.default,
};
