/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    forwardRef,
    ForwardRefExoticComponent,
    ReactElement,
    ReactNode,
    RefAttributes,
} from 'react';
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

/*
 * Compounded ListGroup component type.
 */
type CompoundedListGroupComponent = {
    Item: typeof ListGroupItem;
} & ForwardRefExoticComponent<ListGroupProps & RefAttributes<HTMLDivElement>>;

/**
 * List group component.
 *
 * @param {ListGroupProps} props - Props.
 * @returns - React component.
 */
export const ListGroup = forwardRef<HTMLDivElement, ListGroupProps>(function ListGroup(
    { children, className }: ListGroupProps,
    ref,
): ReactElement {
    const listClassName = clsx('list-group', className && className);

    return (
        <div
            className={listClassName}
            role="list"
            ref={ref}
        >
            {children}
        </div>
    );
}) as CompoundedListGroupComponent;

/**
 * Component extensions.
 */
ListGroup.Item = ListGroupItem;
