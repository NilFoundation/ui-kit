/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
type RowProps = {
    children: ReactNode;
    noGutters?: boolean;
    className?: string;
};

/**
 * Row.
 *
 * @param {RowProps} props - Props.
 * @returns React component.
 */
export const Row = ({ children, noGutters = false, className }: RowProps): ReactElement => {
    const rowClassName = clsx('row', noGutters && 'row-no-gutters', className && className);

    return <div className={rowClassName}>{children}</div>;
};
