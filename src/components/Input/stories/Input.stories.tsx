/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Input as InputComponent } from '../Input';
import { Size } from '../../../enums';

export default {
    component: InputComponent,
    title: 'form controls/Input',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        size: {
            control: 'select',
            defaultValue: Size.md,
        },
        disabled: {
            control: 'boolean',
        },
    },
} as ComponentMeta<typeof InputComponent>;

export const Input: Story = args => <InputComponent {...args} />;
