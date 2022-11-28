/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ElementType, ForwardedRef, forwardRef, HTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';
import { Breakpoint } from '../../enums';
import { BreakpointValue } from '../../models';

/**
 * Column breakpoints props.
 *
 * @example
 * ```tsx
 * xs={12}
 * ```
 */
type Breakpoints = {
    [Property in keyof typeof Breakpoint]?: BreakpointValue;
};

/**
 * Column offset props.
 */
type Offset = {
    [Property in keyof typeof Breakpoint as `${Property}-offset`]?: BreakpointValue | 0;
};

/**
 * Col modificators props.
 */
type ColModificators = Breakpoints & Offset;

/**
 * Col props.
 */
type ColProps<T extends ElementType> = {
    /**
     * HTML element type used to create column.
     */
    as?: ElementType;
} & ColModificators &
    HTMLAttributes<T>;

/**
 * Column component.
 *
 * @param {ColProps} props - Props.
 * @returns React component.
 */
export const Col = forwardRef(function Col<T extends ElementType>(
    { children, className, as: Component = 'div', ...restProps }: ColProps<T>,
    ref: ForwardedRef<T>,
): ReactElement {
    const getColClassName = () => {
        const keys = Object.keys(restProps).filter(x => x.startsWith('col-')) as Array<
            keyof ColModificators
        >;

        if (!keys.length) {
            return 'col';
        }

        return keys.map(key => {
            const value = restProps[key];

            return value !== undefined ? `col-${key}-${value}` : '';
        });
    };

    const colClassName = clsx(className && className, getColClassName());

    return (
        <Component
            className={colClassName}
            ref={ref}
        >
            {children}
        </Component>
    );
});
