/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Button } from './Button';
import { Size, Variant } from '../../enums';

export default {
    component: Button,
    title: 'components/Button',
    argTypes: {
        text: {
            type: 'string',
        },
        children: {
            table: {
                disable: true,
            },
        },
        disabled: {
            type: 'boolean',
        },
        size: {
            control: 'select',
        },
    },
} as ComponentMeta<typeof Button>;

const Template: Story = args => <Button {...args}>{args.text}</Button>;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    text: 'Button',
    size: Size.md,
    variant: Variant.default,
};
