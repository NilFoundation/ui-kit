/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, useContext } from 'react';
import { Expandable, ExpandableProps } from '../Expandable';
import { CollapseContext } from './CollapseContext';

/**
 * Props.
 */
export type CollapseContentProps = ExpandableProps;

/**
 * Disclosure content component.
 *
 * @param {CollapseContentProps} props - Props.
 * @returns - React component.
 */
export const CollapseContent = ({ children, ...rest }: CollapseContentProps): ReactElement => {
    const { isOpen } = useContext(CollapseContext);

    return (
        <Expandable
            isOpen={isOpen}
            {...rest}
        >
            {children}
        </Expandable>
    );
};
