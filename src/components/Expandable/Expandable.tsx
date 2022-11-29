/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { DetailedHTMLProps, forwardRef, HTMLAttributes, ReactElement } from 'react';

/**
 * Expandable props.
 */
export type ExpandableProps = {
    /**
     * Is content visible.
     */
    isOpen?: boolean;
    /**
     * Destroy children components when close.
     */
    unmountOnCollapse?: boolean;
} & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

/**
 * Expandable component.
 *
 * @param {ExpandableProps} props - Props.
 * @returns React component.
 */
export const Expandable = forwardRef<HTMLDivElement, ExpandableProps>(function Expandable(
    { children, className = '', isOpen, unmountOnCollapse = true, ...rest },
    ref,
): ReactElement {
    return (
        <>
            {(!unmountOnCollapse || isOpen) && (
                <div
                    className={`${className}${!isOpen ? ' collapse' : ''}`}
                    ref={ref}
                    {...rest}
                >
                    {children}
                </div>
            )}
        </>
    );
});
