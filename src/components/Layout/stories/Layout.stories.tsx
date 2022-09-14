/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Layout as LayoutComponent } from '../Layout';

export default {
    component: LayoutComponent,
    title: 'layout/Layout',
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
        header: {
            table: {
                disable: true,
            },
        },
        footer: {
            table: {
                disable: true,
            },
        },
        sidebar: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        header: <div style={{ height: '100px', backgroundColor: 'blueviolet' }} />,
        footer: <div style={{ height: '100px', backgroundColor: 'lightcoral' }} />,
    },
} as ComponentMeta<typeof LayoutComponent>;

export const Layout: Story = args => (
    <LayoutComponent {...args}>
        <div style={{ height: '500px', backgroundColor: 'peachpuff' }} />
    </LayoutComponent>
);
