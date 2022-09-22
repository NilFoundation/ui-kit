/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Args, ComponentMeta, Story } from '@storybook/react';
import { Form as FormComponent } from '../Form';
import { Input } from '../../Input';
import { Select } from '../../Select';

export default {
    component: FormComponent,
    title: 'form controls/Form',
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
        hasError: {
            control: 'boolean',
        },
        hasWarning: {
            control: 'boolean',
        },
    },
} as ComponentMeta<typeof FormComponent>;

export const Form: Story = ({ hasError, hasWarning, ...rest }: Args) => (
    <FormComponent {...rest}>
        <FormComponent.Group
            hasError={hasError}
            hasWarning={hasWarning}
        >
            <FormComponent.Label>Name</FormComponent.Label>
            <Input />
            <FormComponent.Hint>Useful information</FormComponent.Hint>
        </FormComponent.Group>
        <FormComponent.Group
            hasError={hasError}
            hasWarning={hasWarning}
        >
            <FormComponent.Label>Gender</FormComponent.Label>
            <Select>
                <Select.Option
                    value="male"
                    title="male"
                />
                <Select.Option
                    value="female"
                    title="female"
                />
                <Select.Option
                    value="other"
                    title="other"
                />
            </Select>
            <FormComponent.Hint>Just another useful information</FormComponent.Hint>
        </FormComponent.Group>
    </FormComponent>
);
