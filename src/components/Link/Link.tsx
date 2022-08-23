/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { AnchorHTMLAttributes, ReactElement, ReactNode } from 'react';

/**
 * Props.
 */
export type LinkProps = {
    target?: string;
    children?: ReactNode;
} & AnchorHTMLAttributes<HTMLElement>;

/**
 * Basic link component.
 *
 * @param {LinkProps} props - Props.
 * @returns React component.
 */
export const Link = ({
    className,
    target = '_blank',
    children,
    ...rest
}: LinkProps): ReactElement => (
    <a
        className={`link ${className ? className : ''}`}
        target={target}
        rel="noreferrer"
        {...rest}
    >
        {children && children}
    </a>
);
