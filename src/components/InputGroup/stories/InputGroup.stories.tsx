/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { InputGroup as InputGroupComponent } from '../InputGroup';
import { FormControl } from '../../FormControl';
import { Button } from '../../Button';

export default {
    component: InputGroupComponent,
    title: 'form controls/InputGroup',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        children: {
            table: {
                disable: true,
            },
        },
        size: {
            control: 'select',
        },
    },
} as ComponentMeta<typeof InputGroupComponent>;

export const InputGroup: Story = args => (
    <InputGroupComponent {...args}>
        <InputGroupComponent.Text>Addon</InputGroupComponent.Text>
        <FormControl />
        <Button outline>Button</Button>
    </InputGroupComponent>
);
