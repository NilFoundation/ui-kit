/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';

/**
 * Props.
 */
export type NavbarProps = {
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
 * Navbar.
 *
 * @param {NavbarProps} props - Props.
 * @returns React component.
 */
export const Navbar = ({ children, className = '' }: NavbarProps): ReactElement => (
    <nav className={`navbar navbar-default ${className}`}>{children}</nav>
);
