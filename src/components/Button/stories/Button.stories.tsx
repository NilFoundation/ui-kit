/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Button as ButtonComponent } from '../Button';
import { Size, Variant } from '../../../enums';

export default {
    component: ButtonComponent,
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
} as ComponentMeta<typeof ButtonComponent>;

export const Button: Story = args => <ButtonComponent {...args}>{args.text}</ButtonComponent>;
Button.args = {
    text: 'Button',
    size: Size.md,
    variant: Variant.default,
};
