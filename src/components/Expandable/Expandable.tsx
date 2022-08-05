/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';

/**
 * Props.
 */
export type ExpandableProps = {
    children: ReactNode;
    className?: string;
    isOpen?: boolean;
    unmountOnCollapse?: boolean;
    id?: string;
}

/**
 * Expandable base component.
 *
 * @param {ExpandableProps} props - Props.
 * @returns React component.
 */
export const Expandable = ({
    children,
    className = '',
    isOpen,
    unmountOnCollapse = true,
    id
}: ExpandableProps): ReactElement =>
    <div className={`expandable ${className && className}`}>
        {
            (!unmountOnCollapse || isOpen) &&
                <div id={id} className={`collapse ${!isOpen ? 'hidden' : ''}`}>
                    {children}
                </div>
        }
    </div>;
