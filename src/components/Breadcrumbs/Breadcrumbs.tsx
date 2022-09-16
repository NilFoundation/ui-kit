/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import { BreadcrumbsItem } from './BreadcrumbsItem';

/**
 * Props.
 */
export type BreadcrumbsProps = {
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
 * Breadcrumbs component.
 *
 * @param {BreadcrumbsProps} props - Props.
 * @returns React component.
 */
export const Breadcrumbs = ({ children, className = '' }: BreadcrumbsProps): ReactElement => (
    <ol
        className={`breadcrumb ${className ?? ''}`}
        aria-label="breadcrumb navigation"
    >
        {children}
    </ol>
);

/**
 * Component extensions.
 */
Breadcrumbs.Item = BreadcrumbsItem;
