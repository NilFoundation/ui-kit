/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactNode, forwardRef } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
export interface TableProps {
    children: ReactNode;
    className?: string;
    bordered ?: boolean;
    condensed ?: boolean;
    responsive?: boolean;
    striped?: boolean;
}

/**
 * Table component.
 *
 * @param {TableProps} props - Props.
 * @returns - React component.
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(
    ({
        className,
        children,
        bordered,
        condensed,
        responsive,
        striped
    }: TableProps, ref) => {
        const tableClassName = clsx(
            'table',
            className && className,
            bordered && 'table-bordered',
            condensed && 'table-condensed',
            responsive && 'table-responsive',
            striped && 'table-striped'
        );

        return (
            <div className="table-responsive">
                <table className={tableClassName} ref={ref}>
                    {children}
                </table>
            </div>
        );
    }
);
