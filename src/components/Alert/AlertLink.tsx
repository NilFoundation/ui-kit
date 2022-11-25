/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef, ReactElement } from 'react';

/**
 * Alert link component props.
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
export const AlertLink = forwardRef<HTMLAnchorElement, AlertLinkProps>(function AlertLink(
    { children, className, ...rest },
    ref,
): ReactElement {
    return (
        <a
            className={`alert-link ${className ?? ''}`}
            ref={ref}
            {...rest}
        >
            {children}
        </a>
    );
});
