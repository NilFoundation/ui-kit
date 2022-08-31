/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Dropdown } from './Dropdown';

export default {
    component: Dropdown,
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
} as ComponentMeta<typeof Dropdown>;

export const DefaultDropdown: Story = args => (
    <Dropdown {...args}>
        <Dropdown.Button>Toggle me!</Dropdown.Button>
        <Dropdown.Menu>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item disabled>Item 2</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);
