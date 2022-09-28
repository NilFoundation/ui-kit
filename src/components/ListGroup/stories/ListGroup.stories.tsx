/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ListGroup as ListGroupComponent } from '../ListGroup';
import { Variant } from '../../../enums';

export default {
    component: ListGroupComponent,
    title: 'components/ListGroup',
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
} as ComponentMeta<typeof ListGroupComponent>;

export const ListGroup: Story = args => {
    return (
        <ListGroupComponent {...args}>
            <ListGroupComponent.Item variant={Variant.info}>Item</ListGroupComponent.Item>
            <ListGroupComponent.Item href="#">Item with link</ListGroupComponent.Item>
            <ListGroupComponent.Item active>Active item</ListGroupComponent.Item>
            <ListGroupComponent.Item disabled>Disabled item</ListGroupComponent.Item>
        </ListGroupComponent>
    );
};
