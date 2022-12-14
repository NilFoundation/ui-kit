/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { FormControl as FormControlComponent } from '../FormControl';
import { Size } from '../../../enums';

export default {
    component: FormControlComponent,
    title: 'form controls/FormControl',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        size: {
            control: 'select',
        },
        disabled: {
            control: 'boolean',
        },
        type: {
            control: 'select',
            options: ['text', 'number', 'file'],
        },
    },
    args: {
        size: Size.md,
        type: 'text',
    },
} as ComponentMeta<typeof FormControlComponent>;

export const FormControl: Story = args => <FormControlComponent {...args} />;
