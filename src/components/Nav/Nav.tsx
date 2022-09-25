/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';
import { NavItem } from './NavItem';

/**
 * Props.
 */
export type NavProps = {
    /**
     * Provides vertical styling.
     */
    vertical?: boolean;
    /**
     * Make items equal widths of their parent at screens wider than 768px.
     */
    justified?: boolean;
    /**
     * Apply tabs styling.
     */
    tabs?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

/**
 * Panel image component.
 *
 * @param {NavProps} props - Props.
 * @returns React component.
 */
export const Nav = ({
    children,
    className,
    vertical,
    justified,
    tabs,
    ...rest
}: NavProps): ReactElement => {
    const navClassName = clsx(
        'nav',
        className && className,
        vertical && 'nav-stacked',
        justified && 'nav-justified',
        tabs ? 'nav-tabs' : 'nav-pills',
    );

    return (
        <ul
            className={navClassName}
            {...rest}
        >
            {children}
        </ul>
    );
};

/**
 * Component extensions.
 */
Nav.Item = NavItem;
