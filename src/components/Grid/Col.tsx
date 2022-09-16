/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ElementType, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Breakpoint } from '../../enums';
import { BreakpointValue } from '../../models';

/**
 * Breakpoints.
 */
type Breakpoints = {
    [Property in keyof typeof Breakpoint]?: BreakpointValue;
};

/**
 * Offset.
 */
type Offset = {
    [Property in keyof typeof Breakpoint as `${Property}-offset`]?: BreakpointValue;
};

/**
 * ColModificators.
 */
type ColModificators = Breakpoints & Offset;

/**
 * Props.
 */
type ColProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * HTML element type used to create column.
     */
    as?: ElementType;
} & ColModificators;

/**
 * Container.
 *
 * @param {ColProps} props - Props.
 * @returns React component.
 */
export const Col = ({
    children,
    className,
    as: Component = 'div',
    ...restProps
}: ColProps): ReactElement => {
    const getColClassName = () => {
        const keys = Object.keys(restProps) as Array<keyof ColModificators>;

        if (!keys.length) {
            return 'col';
        }

        return keys.map(key => {
            const value = restProps[key];

            return value ? `col-${key}-${value}` : '';
        });
    };

    const colClassName = clsx(className && className, getColClassName());

    return <Component className={colClassName}>{children}</Component>;
};
