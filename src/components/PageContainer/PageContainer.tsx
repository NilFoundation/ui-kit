/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import { Container } from '../Grid';
import './PageContainer.scss';

/**
 * Props.
 */
type PageContainerProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
};

/**
 * Page container.
 *
 * @param {PageContainerProps} props - Props.
 * @returns React component.
 */
export const PageContainer = ({ children, className }: PageContainerProps): ReactElement => (
    <Container
        className={`pageContainer ${className ?? ''}`}
        fluid
    >
        {children}
    </Container>
);
