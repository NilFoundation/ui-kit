/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';

/**
 * Props.
 */
type JumbotronProps = {
    children: ReactNode;
    className?: string;
};

/**
 * Jumbotron.
 *
 * @param {JumbotronProps} props - Props.
 * @returns React component.
 */
export const Jumbotron = ({ children, className = '' }: JumbotronProps): ReactElement => (
    <div className={`jumbotron ${className}`}>{children}</div>
);
