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
    children: ReactNode;
};

/**
 * Page container.
 *
 * @param {PageContainerProps} props - Props.
 * @returns React component.
 */
export const PageContainer = ({children}: PageContainerProps): ReactElement =>
    <Container className="pageContainer" fluid>
        {children}
    </Container>;
