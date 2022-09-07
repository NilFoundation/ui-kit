/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';

/**
 * Props.
 */
export type ExpandableProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Is content visible.
     */
    isOpen?: boolean;
    /**
     * Destroy children components when close.
     */
    unmountOnCollapse?: boolean;
    /**
     * Component id.
     */
    id?: string;
};

/**
 * Expandable component.
 *
 * @param {ExpandableProps} props - Props.
 * @returns React component.
 */
export const Expandable = ({
    children,
    className = '',
    isOpen,
    unmountOnCollapse = true,
    id,
}: ExpandableProps): ReactElement => (
    <>
        {(!unmountOnCollapse || isOpen) && (
            <div
                id={id}
                className={`${className} ${!isOpen ? 'collapse' : ''}`}
            >
                {children}
            </div>
        )}
    </>
);
