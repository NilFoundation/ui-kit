/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Menu as MenuComponent } from '../Menu';

export default {
    component: MenuComponent,
    title: 'components/Menu',
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
        onCloseMenu: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof MenuComponent>;

export const Menu: Story = args => (
    <div style={{ position: 'relative' }}>
        <MenuComponent
            visible
            {...args}
        >
            <MenuComponent.Header>Section 1</MenuComponent.Header>
            <MenuComponent.Item>Item 1</MenuComponent.Item>
            <MenuComponent.Item>Item 2</MenuComponent.Item>
            <MenuComponent.Divider />
            <MenuComponent.Header>Section 2</MenuComponent.Header>
            <MenuComponent.Item>Item 3</MenuComponent.Item>
            <MenuComponent.Item>Item 4</MenuComponent.Item>
        </MenuComponent>
    </div>
);

Menu.args = {
    onCloseMenu: undefined,
};
