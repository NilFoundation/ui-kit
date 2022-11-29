/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    DetailedHTMLProps,
    forwardRef,
    LiHTMLAttributes,
    ReactElement,
    useCallback,
} from 'react';
import clsx from 'clsx';

/**
 * Breadcrumbs item props.
 */
export type BreadcrumbsItemProps = {
    /**
     * Applies active state.
     */
    active?: boolean;
    /**
     * Adds href attribute. Defaults to #.
     */
    href?: string;
    /**
     * Render custom link.
     */
    renderLink?: ({ href, active }: { href?: string; active?: boolean }) => ReactElement;
} & Omit<DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, 'ref'>;

/**
 * Breadcrumbs item component.
 *
 * @param {BreadcrumbsItemProps} props - Props.
 * @returns React component.
 */
export const BreadcrumbsItem = forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
    function BreadcrumbsItem(
        { active, className, children, href, renderLink, ...rest },
        ref,
    ): ReactElement {
        const itemClassName = clsx('breadcrumb-item', className && className, active && 'active');
        const renderDefaultLink = useCallback(
            () => (active ? children : <a href={href ?? '#'}>{children}</a>),
            [active, children, href],
        );

        return (
            <li
                className={itemClassName}
                aria-current={active}
                ref={ref}
                {...rest}
            >
                {renderLink ? renderLink({ href, active }) : renderDefaultLink()}
            </li>
        );
    },
);
