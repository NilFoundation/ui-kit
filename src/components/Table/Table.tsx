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
    /**
     * Component children. Suggested to be <thead> or <tbody> tags.
     */
    children: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Adds borders on all sides of the table and cells.
     */
    bordered ?: boolean;
    /**
     * Makes table more compact, reducing cell padding in half.
     */
    condensed ?: boolean;
    /**
     * Adds horizontal scroll on small divices.
     */
    responsive?: boolean;
    /**
     * Makes table striped.
     */
    striped?: boolean;
}

/**
 * Table component.
 * This component is just a bootstrap styles provider, to include any table logic, like sorting,
 * please, use external react-based librares.
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
        responsive = true,
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

        const renderTable = () =>
            <table className={tableClassName} ref={ref}>
                {children}
            </table>;

        return (
            responsive
                ? <div className="table-responsive">
                      {renderTable()}
                  </div>
                : renderTable()
        );
    }
);
