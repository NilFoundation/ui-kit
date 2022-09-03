/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Select as SelectComponent } from '../Select';
import { Size } from '../../../enums';

export default {
    component: SelectComponent,
    title: 'form controls/Select',
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
        onSelect: {
            table: {
                disable: true,
            },
        },
        size: {
            control: 'select',
        },
    },
} as ComponentMeta<typeof SelectComponent>;

export const Select: Story = args => (
    <SelectComponent {...args}>
        <SelectComponent.Option
            value={0}
            title="0"
        />
        <SelectComponent.Option
            value={1}
            title="1"
            disabled
        />
    </SelectComponent>
);

Select.args = {
    size: Size.md,
};
