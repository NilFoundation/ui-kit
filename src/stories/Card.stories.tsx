/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Button, Card } from 'react-bootstrap';

export default {
    title: 'components/Card',
    component: Card,
    argTypes: {},
};

const Template: Story = args => {
    return (
        <Card>
            <Card.Header as="h5">{args.header}</Card.Header>
            <Card.Body>
                <Card.Title>{args.title}</Card.Title>
                <Card.Text>{args.body}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export const _Card = Template.bind({});
_Card.args = {
    header: 'Header',
    title: 'Card Title',
    body: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
};
