/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';

/**
 * Props.
 */
export type MenuGroupProps = {
    title: string;
    children?: ReactNode,
    className?: string;
};

/**
 * Menu group component.
 *
 * @param {MenuGroupProps} props - Props.
 * @returns React component.
 */
export const MenuGroup = ({children, title, className}: MenuGroupProps): ReactElement =>
    <>
        <li className={`dropdown-header ${className ? className : ''}`}>
            {title}
        </li>
        {children && children}
    </>;
