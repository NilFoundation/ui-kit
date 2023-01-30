/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Form } from 'react-bootstrap';

export default {
    title: 'forms/Floatinglabel',
    component: Form,
    argTypes: {},
};

const Template: Story = () => {
    return (
        <Form>
            <h3>Form.FloatingLabel</h3>
            <Form.FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                />
            </Form.FloatingLabel>
            <Form.FloatingLabel
                controlId="floatingPassword"
                label="Password"
            >
                <Form.Control
                    type="password"
                    placeholder="Password"
                />
            </Form.FloatingLabel>
        </Form>
    );
};

export const Floatinglabel = Template.bind({});
Floatinglabel.args = {};
