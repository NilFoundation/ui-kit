/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import './Navbar.scss';

/**
 * Props.
 */
type NavbarProps = {
    children?: ReactNode;
};

/**
 * Props.
 */
export type NavbarType = typeof Navbar;

/**
 * Navbar.
 *
 * @param {NavbarProps} props - Props.
 * @returns React component.
 */
export const Navbar = ({children}: NavbarProps): ReactElement =>
    <nav className="navbar navbar-default">
        {children}
    </nav>;
