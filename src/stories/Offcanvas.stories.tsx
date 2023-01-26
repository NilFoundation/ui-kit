/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { loremIpsum } from './utils/loremIpsum';

export default {
    title: 'components/Offcanvas',
    component: Offcanvas,
    argTypes: {},
};

const Template: Story = args => {
    const [show, setShow] = useState(args.show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                variant="primary"
                onClick={handleShow}
            >
                Open
            </Button>
            <Offcanvas
                {...args}
                show={show}
                onHide={handleClose}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{args.title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>{loremIpsum}</Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export const _Offcanvas = Template.bind({});
_Offcanvas.args = {
    title: 'Offcanvas',
};
