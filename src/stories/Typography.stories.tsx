/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Container, Row } from 'react-bootstrap';

export default {
    title: 'components/Typography',
    argTypes: {},
};

export const _Headings: Story = () => {
    return (
        <Container>
            <Row>
                <h1>h1. Bootstrap heading</h1>
                <h3>
                    Fancy display heading{' '}
                    <small className="text-muted">With faded secondary text</small>
                </h3>
                <h1 className="display-1">Display 1 heading</h1>
            </Row>
        </Container>
    );
};

export const _Paragraphs: Story = () => {
    return (
        <Container>
            <Row>
                <p className="lead">
                    This is a lead paragraph. It stands out from regular paragraphs.
                </p>
            </Row>
        </Container>
    );
};
