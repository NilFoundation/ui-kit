/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Breadcrumbs as BreadcrumbsComponent } from '../Breadcrumbs';

export default {
    component: BreadcrumbsComponent,
    title: 'components/Breadcrumbs',
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
} as ComponentMeta<typeof BreadcrumbsComponent>;

export const Breadcrumbs: Story = args => (
    <BreadcrumbsComponent {...args}>
        <BreadcrumbsComponent.Item>First</BreadcrumbsComponent.Item>
        <BreadcrumbsComponent.Item>Second</BreadcrumbsComponent.Item>
        <BreadcrumbsComponent.Item active>Third</BreadcrumbsComponent.Item>
    </BreadcrumbsComponent>
);
