/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Args, Story } from '@storybook/react';
import { Col, Row, Container } from '..';

export default {
    title: 'layout/Grid',
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
        className: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        fluid: false,
        noGutters: false,
    },
};

export const Grid: Story = ({ fluid, noGutters }: Args) => (
    <Container fluid={fluid}>
        <Row noGutters={noGutters}>
            <Col
                lg={4}
                md={6}
                sm={9}
                xs={12}
            >
                <div style={{ backgroundColor: 'darkorchid' }}>lg=4 / md=6 / sm=9 / xs=12</div>
            </Col>
            <Col
                lg={4}
                md={3}
                sm={12}
                xs={6}
            >
                <div style={{ backgroundColor: 'darkgray' }}>lg=4 / md=3 / sm=12 / xs=6</div>
            </Col>
            <Col
                lg={4}
                md={2}
                sm={4}
                xs={8}
                xs-offset={3}
                sm-offset={0}
            >
                <div style={{ backgroundColor: 'darkmagenta' }}>
                    lg=4 / md=2 / sm=4 / xs=8 / xs-offset=3
                </div>
            </Col>
        </Row>
    </Container>
);
