/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { TextArea as TextAreaComponent } from '../TextArea';

export default {
    component: TextAreaComponent,
    title: 'form controls/TextArea',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        disabled: {
            control: 'boolean',
        },
    },
} as ComponentMeta<typeof TextAreaComponent>;

export const TextArea: Story = args => (
    <TextAreaComponent
        placeholder="cdcdc"
        {...args}
    />
);
