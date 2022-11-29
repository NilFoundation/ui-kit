/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { forwardRef, ReactElement, useContext } from 'react';
import { Expandable, ExpandableProps } from '../Expandable';
import { CollapseContext } from './CollapseContext';

/**
 * Collapse content props.
 */
export type CollapseContentProps = ExpandableProps;

/**
 * Collapse content component.
 *
 * @param {CollapseContentProps} props - Props.
 * @returns - React component.
 */
export const CollapseContent = forwardRef<HTMLDivElement, CollapseContentProps>(
    function CollapseContent({ children, ...rest }, ref): ReactElement {
        const { isOpen } = useContext(CollapseContext);

        return (
            <Expandable
                isOpen={isOpen}
                ref={ref}
                {...rest}
            >
                {children}
            </Expandable>
        );
    },
);
