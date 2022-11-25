/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef, ReactElement } from 'react';

/**
 * Props.
 */
export type AlertLinkProps = DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>;

/**
 * Alert link component.
 *
 * @param {AlertLinkProps} props - Props.
 * @returns React component.
 */
export const AlertLink = forwardRef(function AlertLink({
    children,
    className,
    ...rest
}: AlertLinkProps): ReactElement {
    return (
        <a
            className={`alert-link ${className ?? ''}`}
            {...rest}
        >
            {children}
        </a>
    );
});
