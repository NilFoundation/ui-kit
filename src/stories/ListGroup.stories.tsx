/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { ListGroup } from 'react-bootstrap';

export default {
    title: 'components/Listgroup',
    component: ListGroup,
    argTypes: {},
};

const Template: Story = () => {
    return (
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item
                action
                href="#link1"
            >
                Link 1
            </ListGroup.Item>
            <ListGroup.Item
                action
                href="#link2"
                disabled
            >
                Link 2
            </ListGroup.Item>
            <ListGroup.Item action>This one is a button</ListGroup.Item>
        </ListGroup>
    );
};

export const _Listgroup = Template.bind({});
_Listgroup.args = {};
