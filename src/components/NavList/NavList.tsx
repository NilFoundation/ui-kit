/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';
import { NavListElement } from './NavListElement';
import { NavListContext } from './NavListContext';

/**
 * Props.
 */
export type NavListProps = {
    /**
     * On toggle active navlist element.
     */
    onToggle?: () => void;
    /**
     * Provides vertical styling.
     */
    vertical?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

/**
 * Panel image component.
 *
 * @param {NavListProps} props - Props.
 * @returns React component.
 */
export const NavList = ({
    children,
    className,
    onToggle,
    vertical = false,
    ...rest
}: NavListProps): ReactElement => {
    const navListClassName = clsx('nav', className && className, vertical && 'nav-stacked');

    return (
        <NavListContext.Provider value={{ onToggle }}>
            <ul
                className={navListClassName}
                {...rest}
            >
                {children}
            </ul>
        </NavListContext.Provider>
    );
};

/**
 * Component extensions.
 */
NavList.Link = NavListElement;
