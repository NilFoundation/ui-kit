/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Form } from 'react-bootstrap';

export default {
    title: 'forms/Select',
    component: Form.Select,
    argTypes: {},
};

const Template: Story = args => {
    return (
        <Form.Select
            size={args.size}
            disabled={args.disabled}
        >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    );
};

export const _Select = Template.bind({});
_Select.args = {
    size: 'md',
    disabled: false,
};
