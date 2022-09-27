/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { AriaRole, ElementType, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
type RowProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Remove the gutters from a row and it's columns.
     */
    noGutters?: boolean;
    /**
     * Provide classname to customize appearance.
     */
    className?: string;
    /**
     * HTML element type used to create row.
     */
    as?: ElementType;
    /**
     * WAI-ARIA role attribute.
     */
    role?: AriaRole;
};

/**
 * Row.
 *
 * @param {RowProps} props - Props.
 * @returns React component.
 */
export const Row = ({
    children,
    noGutters = false,
    className,
    as: Component = 'div',
    ...rest
}: RowProps): ReactElement => {
    const rowClassName = clsx('row', noGutters && 'row-no-gutters', className && className);

    return (
        <Component
            className={rowClassName}
            {...rest}
        >
            {children}
        </Component>
    );
};
