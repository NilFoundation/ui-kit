/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Form } from 'react-bootstrap';

export default {
    title: 'forms/Range',
    component: Form,
    argTypes: {},
};

const FormControlTemplate: Story = () => {
    return (
        <Form>
            <h3>Range</h3>
            <Form.Range />
        </Form>
    );
};

export const Range = FormControlTemplate.bind({});
Range.args = {};
