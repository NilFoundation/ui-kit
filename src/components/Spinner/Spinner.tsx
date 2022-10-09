/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Size } from '../../enums';
import './Spinner-BS-5.scss'; // TODO - remove after migrating to BS5.

/**
 * Props.
 */
export type SpinnerProps = {
    /**
     * Provide size.
     */
    size?: Exclude<Size, Size.xs>;
    /**
     * Place Spinner in the center of all avialiable space.
     */
    grow?: boolean;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
};

/**
 * Spinner component.
 *
 * @param {SpinnerProps} props - Props.
 * @returns React component.
 */
export const Spinner = ({ className, size = Size.md, grow }: SpinnerProps): ReactElement => {
    const spinnerClassName = clsx(
        className && className,
        'spinner-border',
        size !== Size.md && `spinner-border-${size}`,
    );

    const renderSpinner = () => (
        <div
            className={spinnerClassName}
            role="status"
        >
            <span className="visually-hidden">Loading...</span>
        </div>
    );

    return grow ? <div className="spinner-grow-container">{renderSpinner()}</div> : renderSpinner();
};
