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
    children: ReactNode;
    flush?: boolean;
}

/**
 * List group component.
 *
 * @param {ListGroupProps} props - Props.
 * @returns - React component.
 */
export const ListGroup = ({ children, flush = false }: ListGroupProps): ReactElement => {
    const listClassName = clsx('list-group', flush && 'list-group-flush');

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
