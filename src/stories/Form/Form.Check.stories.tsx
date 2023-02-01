/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Form } from 'react-bootstrap';
import { FormCheckType } from 'react-bootstrap/esm/FormCheck';

export default {
    title: 'forms/Check',
    component: Form,
    argTypes: {},
};

const types = ['checkbox', 'radio', 'switch'] as FormCheckType[];

const FormControlTemplate: Story = () => {
    return (
        <Form>
            <h3>Form.Check Default</h3>
            {types.map(type => (
                <div
                    key={`default-${type}`}
                    className="mb-3"
                >
                    <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                    />

                    <Form.Check
                        disabled
                        type={type}
                        label={`disabled ${type}`}
                        id={`disabled-default-${type}`}
                    />
                </div>
            ))}

            <h3>Form.Check Inline</h3>
            {types.map(type => (
                <div
                    key={`inline-${type}`}
                    className="mb-3"
                >
                    <Form.Check
                        inline
                        label="1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    <Form.Check
                        inline
                        disabled
                        label="3 (disabled)"
                        type={type}
                        id={`inline-${type}-3`}
                    />
                </div>
            ))}
        </Form>
    );
};

export const Check = FormControlTemplate.bind({});
Check.args = {};
