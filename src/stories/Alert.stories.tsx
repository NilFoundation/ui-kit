/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { variants } from './variants';

export default {
    title: 'components/Alert',
    component: Alert,
    argTypes: {},
};

export const Examples = () => {
    return variants.map((variant, idx) => (
        <Alert
            key={idx}
            variant={variant}
        >
            This is a {variant} alert—check it out!
        </Alert>
    ));
};

export const Links = () => {
    return variants.map((variant, idx) => (
        <Alert
            key={idx}
            variant={variant}
        >
            This is a {variant} alert with <Alert.Link href="#">an example link</Alert.Link>. Give
            it a click if you like.
        </Alert>
    ));
};

export const AdditionalContent = () => {
    return (
        <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
                Aww yeah, you successfully read this important alert message. This example text is
                going to run a bit longer so that you can see how spacing within an alert works with
                this kind of content.
            </p>
            <hr />
            <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
        </Alert>
    );
};

export const DismissingError = () => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
            >
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non commodo luctus, nisi
                    erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur
                    purus sit amet fermentum.
                </p>
            </Alert>
        );
    }

    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
};

export const DismissingSuccess = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert
                show={show}
                variant="success"
            >
                <Alert.Heading>{"How's it going?!"}</Alert.Heading>
                <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
                    odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button
                        onClick={() => setShow(false)}
                        variant="outline-success"
                    >
                        {"Close me y'all!"}
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
};
