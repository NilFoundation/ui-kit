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
    active: boolean;
    text: string;
    className?: string;
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
            aria-current={active && 'page'}
        >
            <Link href={href ?? '#'}>{text}</Link>
        </li>
    );
};
