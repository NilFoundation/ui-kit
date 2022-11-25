/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Button as ButtonComponent } from '../Button';
import { Icon } from '../../Icon';

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

export const Button: Story = args => (
    <ButtonComponent {...args}>
        {args.text} <Icon iconName={`glyphicon glyphicon-${args.glyphicon}`} />
    </ButtonComponent>
);
Button.args = {
    text: 'Button',
    size: 'md',
    variant: 'primary',
    glyphicon: '',
};
