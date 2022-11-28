/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ElementType, ForwardedRef, forwardRef, HTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';

/**
 * Row props.
 */
type RowProps<T extends ElementType> = {
    /**
     * Remove the gutters from a row and it's columns.
     */
    noGutters?: boolean;
    /**
     * HTML element type used to create row.
     */
    as?: ElementType;
} & HTMLAttributes<T>;

/**
 * Row component.
 *
 * @param {RowProps} props - Props.
 * @returns React component.
 */
export const Row = forwardRef(function Row<T extends ElementType>(
    { children, noGutters = false, className, as: Component = 'div', ...rest }: RowProps<T>,
    ref: ForwardedRef<T>,
): ReactElement {
    const rowClassName = clsx('row', noGutters && 'g-0', className && className);

    return (
        <Component
            className={rowClassName}
            ref={ref}
            {...rest}
        >
            {children}
        </Component>
    );
});
