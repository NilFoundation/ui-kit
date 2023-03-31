/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import { loremIpsum } from './utils/loremIpsum';

export default {
    title: 'components/Toast',
    component: Toast,
    argTypes: {},
};

const Template: Story = args => {
    const [show, setShow] = useState(args.show);

    return (
        <>
            <Button
                onClick={() => setShow(true)}
                className="mb-2"
            >
                Create toast
            </Button>
            <Toast
                autohide={args.autohide}
                show={show}
                onClose={() => setShow(false)}
                delay={args.delay}
            >
                <Toast.Header>
                    <strong className="me-auto">{args.header}</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>{loremIpsum.slice(0, 100)}</Toast.Body>
            </Toast>
        </>
    );
};

export const _Toast = Template.bind({});
_Toast.args = {
    show: false,
    delay: 3000,
    autohide: false,
    header: '=Nil; Foundation',
};
