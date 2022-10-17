/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
export type BreadcrumbsItemProps = {
    /**
     * Text to display.
     */
    children: ReactNode;
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
    /**
     * Render router link or any other custom link.
     */
    renderLink?: ({ href }: { href?: string }) => ReactElement;
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
    children,
    href,
    renderLink,
}: BreadcrumbsItemProps): ReactElement => {
    const itemClassName = clsx('breadcrumb-item', className && className, active && 'active');
    const childrenWithLink = () =>
        renderLink ? renderLink({ href }) : <a href={href ?? '#'}>{children}</a>;

    return (
        <li
            className={itemClassName}
            aria-current={active}
        >
            {active ? children : childrenWithLink()}
        </li>
    );
};
