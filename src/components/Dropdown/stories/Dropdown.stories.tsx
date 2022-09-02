/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Dropdown as DropdownComponent } from '../Dropdown';

export default {
    component: DropdownComponent,
    title: 'components/Dropdown',
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
} as ComponentMeta<typeof DropdownComponent>;

export const Dropdown: Story = args => (
    <DropdownComponent {...args}>
        <DropdownComponent.Button>Toggle me!</DropdownComponent.Button>
        <DropdownComponent.Menu>
            <DropdownComponent.Item>Item 1</DropdownComponent.Item>
            <DropdownComponent.Item disabled>Item 2</DropdownComponent.Item>
        </DropdownComponent.Menu>
    </DropdownComponent>
);
