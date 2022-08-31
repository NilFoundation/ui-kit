/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Link } from '../Link';

/**
 * Props.
 */
export type BreadcrumbsItemProps = {
    /**
     * Text to display.
     */
    text: string;
    /**
     * Applies active state.
     */
    active?: boolean;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Adds href attribute. Defaults to #.
     */
    href?: string;
};

/**
 * Breadcrumbs component.
 *
 * @param {BreadcrumbsItemProps} props - Props.
 * @returns React component.
 */
export const BreadcrumbsItem = ({
    active,
    className,
    text,
    href,
}: BreadcrumbsItemProps): ReactElement => {
    const itemClassName = clsx('breadcrumb-item', className && className, active && 'active');

    return (
        <li
            className={itemClassName}
            aria-current={active}
        >
            {active ? text : <Link href={href ?? '#'}>{text}</Link>}
        </li>
    );
};
