/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { ListGroupItem } from './ListGroupItem';

/**
 * Props.
 */
export interface ListGroupProps {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
}

/**
 * List group component.
 *
 * @param {ListGroupProps} props - Props.
 * @returns - React component.
 */
export const ListGroup = ({ children, className }: ListGroupProps): ReactElement => {
    const listClassName = clsx('list-group', className && className);

    return (
        <div
            className={listClassName}
            role="list"
        >
            {children}
        </div>
    );
};

/**
 * Component extensions.
 */
ListGroup.Item = ListGroupItem;
