/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
type NavItemProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Applies active state.
     */
    active?: boolean;
    /**
     * Applies disabled state.
     */
    disabled?: boolean;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Adds anchor behaviour.
     */
    href?: string;
};

/**
 * NavItem.
 *
 * @param {NavItemProps} props - Props.
 * @returns React component.
 */
export const NavItem = ({
    children,
    active,
    disabled,
    className,
    href,
}: NavItemProps): ReactElement => {
    const computedHref = disabled ? undefined : href ?? '#';
    const itemClassName = clsx(active && 'active', className && className, disabled && 'disabled');

    return (
        <li className={itemClassName}>
            <a
                href={computedHref}
                aria-disabled={disabled}
            >
                {children}
            </a>
        </li>
    );
};
