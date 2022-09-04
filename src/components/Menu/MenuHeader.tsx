/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';

/**
 * Props.
 */
export type MenuHeaderProps = {
    /**
     * Component children.
     */
    children?: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
};

/**
 * Menu header component.
 *
 * @param {MenuHeaderProps} props - Props.
 * @returns React component.
 */
export const MenuHeader = ({ children, className }: MenuHeaderProps): ReactElement => (
    <li className={`dropdown-header ${className ? className : ''}`}>{children}</li>
);
