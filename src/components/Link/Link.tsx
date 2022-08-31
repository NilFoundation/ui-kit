/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { AnchorHTMLAttributes, ReactElement, ReactNode } from 'react';
import './Link.scss';

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
export const Link = ({ className, children, ...rest }: LinkProps): ReactElement => (
    <a
        className={`link ${className ? className : ''}`}
        rel="noreferrer"
        {...rest}
    >
        {children && children}
    </a>
);
