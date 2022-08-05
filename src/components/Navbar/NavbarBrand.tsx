/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';
import { Image } from '../Image';
import { Link } from 'react-router-dom';
import { Paths } from '../../../../routing';

/**
 * Props.
 */
type NavbarProps = {
    imgSource: string;
};

/**
 * Navbar.
 *
 * @param {NavbarProps} props - Props.
 * @returns React component.
 */
export const NavbarBrand = ({imgSource}: NavbarProps): ReactElement =>
    <div className="navbar-brand" role="banner">
        <Link to={Paths.root}>
            <Image source={imgSource} />
        </Link>
    </div>;
