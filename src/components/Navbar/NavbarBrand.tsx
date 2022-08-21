/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';
import { Image } from '../Image';
import { Link } from 'react-router-dom';

/**
 * Props.
 */
type NavbarProps = {
    imgSource: string;
    href: string;
};

/**
 * Navbar.
 *
 * @param {NavbarProps} props - Props.
 * @returns React component.
 */
export const NavbarBrand = ({imgSource, href}: NavbarProps): ReactElement =>
    <div className="navbar-brand" role="banner">
        <Link to={href}>
            <Image source={imgSource} />
        </Link>
    </div>;
