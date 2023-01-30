/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';

export default {
    title: 'forms/Layout',
    component: Form,
    argTypes: {},
};

export const FormGrid: Story = () => {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group
                    as={Col}
                    controlId="formGridEmail"
                >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group
                    as={Col}
                    controlId="formGridPassword"
                >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
            </Row>

            <Form.Group
                className="mb-3"
                controlId="formGridAddress1"
            >
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formGridAddress2"
            >
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group
                    as={Col}
                    controlId="formGridCity"
                >
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group
                    as={Col}
                    controlId="formGridZip"
                >
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group
                className="mb-3"
                id="formGridCheckbox"
            >
                <Form.Check
                    type="checkbox"
                    label="Check me out"
                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
            >
                Submit
            </Button>
        </Form>
    );
};

export const HorizontalForm = () => {
    return (
        <Form>
            <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
            >
                <Form.Label
                    column
                    sm={2}
                >
                    Email
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                    />
                </Col>
            </Form.Group>

            <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
            >
                <Form.Label
                    column
                    sm={2}
                >
                    Password
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                    />
                </Col>
            </Form.Group>
            <fieldset>
                <Form.Group
                    as={Row}
                    className="mb-3"
                >
                    <Form.Label
                        as="legend"
                        column
                        sm={2}
                    >
                        Radios
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="radio"
                            label="first radio"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="second radio"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                        <Form.Check
                            type="radio"
                            label="third radio"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                    </Col>
                </Form.Group>
            </fieldset>
            <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalCheck"
            >
                <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                </Col>
            </Form.Group>

            <Form.Group
                as={Row}
                className="mb-3"
            >
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Sign in</Button>
                </Col>
            </Form.Group>
        </Form>
    );
};

export const ColumnSizing = () => {
    return (
        <Form>
            <Row>
                <Col xs={7}>
                    <Form.Control placeholder="City" />
                </Col>
                <Col>
                    <Form.Control placeholder="State" />
                </Col>
                <Col>
                    <Form.Control placeholder="Zip" />
                </Col>
            </Row>
        </Form>
    );
};

export const AutoSizing = () => {
    return (
        <Form>
            <Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label
                        htmlFor="inlineFormInput"
                        visuallyHidden
                    >
                        Name
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Jane Doe"
                    />
                </Col>
                <Col xs="auto">
                    <Form.Label
                        htmlFor="inlineFormInputGroup"
                        visuallyHidden
                    >
                        Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control
                            id="inlineFormInputGroup"
                            placeholder="Username"
                        />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Remember me"
                    />
                </Col>
                <Col xs="auto">
                    <Button
                        type="submit"
                        className="mb-2"
                    >
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export const DisabledForms = () => {
    return (
        <Form>
            <fieldset disabled>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
                    <Form.Control
                        id="disabledTextInput"
                        placeholder="Disabled input"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="disabledFieldsetCheck"
                        label="Can't check this"
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </fieldset>
        </Form>
    );
};
