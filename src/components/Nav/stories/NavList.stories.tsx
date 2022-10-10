/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Nav as NavComponent } from '../Nav';

export default {
    component: NavComponent,
    title: 'components/Nav',
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof NavComponent>;

export const Nav: Story = args => (
    <NavComponent {...args}>
        <NavComponent.Item>First</NavComponent.Item>
        <NavComponent.Item>Second</NavComponent.Item>
        <NavComponent.Item disabled>Third</NavComponent.Item>
        <NavComponent.Item active>Forth</NavComponent.Item>
    </NavComponent>
);
