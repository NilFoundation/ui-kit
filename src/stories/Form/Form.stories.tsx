/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Form } from 'react-bootstrap';

export default {
    title: 'forms/Form',
    component: Form,
    argTypes: {},
};

const Template: Story = () => {
    return (
        <Form>
            <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
            >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                    We will never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
            >
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                />
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
            >
                <Form.Check
                    type="checkbox"
                    label="Check me out"
                />
            </Form.Group>
        </Form>
    );
};

export const _Form = Template.bind({});
_Form.args = {};
