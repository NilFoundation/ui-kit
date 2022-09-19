/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import { Container, Row, Col } from '../Grid';
import './Layout.scss';

/**
 * Props.
 */
type LayoutProps = {
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Header.
     */
    header?: ReactNode;
    /**
     * Footer.
     */
    footer?: ReactNode;
    /**
     * Makes navabr sticky.
     */
    stickyHeader?: boolean;
};

/**
 * Layout component.
 *
 * @param {LayoutProps} props - Props.
 * @returns React component.
 */
export const Layout = ({
    children,
    header,
    footer,
    stickyHeader,
    className,
}: LayoutProps): ReactElement => (
    <Container
        fluid
        className={`layout ${className ?? ''}`}
    >
        {header && (
            <Row
                as="header"
                className={`layout__header ${stickyHeader ? 'layout__header-sticky' : ''}`}
            >
                <Col>{header}</Col>
            </Row>
        )}
        <Row className="layout__body">
            <Col>{children}</Col>
        </Row>
        {footer && (
            <Row
                as="footer"
                className="layout__footer"
            >
                <Col>{footer}</Col>
            </Row>
        )}
    </Container>
);
