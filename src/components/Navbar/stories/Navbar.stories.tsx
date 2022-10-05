/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Navbar as NavbarComponent } from '../Navbar';

export default {
    component: NavbarComponent,
    title: 'components/Navbar',
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
} as ComponentMeta<typeof NavbarComponent>;

export const Navbar: Story = args => <NavbarComponent {...args}>Navbar</NavbarComponent>;
