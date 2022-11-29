/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { DetailedHTMLProps, forwardRef, HTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';
import { Variant } from '../../enums';

/**
 * Spinner animation type.
 */
type SpinnerType = 'grow' | 'border';

/**
 * Spinner props.
 */
export type SpinnerProps = {
    /**
     * Place Spinner in the center of all avialiable space.
     */
    grow?: boolean;
    /**
     * Provide color scheme.
     */
    variant?: keyof typeof Variant;
    /**
     * Spinner animation type.
     */
    type?: SpinnerType;
} & Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'children' | 'ref' | 'role'
>;

/**
 * Spinner component.
 *
 * @param {SpinnerProps} props - Props.
 * @returns React component.
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(
    { className, grow, variant, type = 'border', ...rest },
    ref,
): ReactElement {
    const spinnerClassName = clsx(
        className && className,
        `spinner-${type}`,
        variant && `text-${variant}`,
    );

    const renderSpinner = () => (
        <div
            className={spinnerClassName}
            role="status"
            ref={ref}
            {...rest}
        >
            <span className="visually-hidden">Loading...</span>
        </div>
    );

    return grow ? <div className="spinner-grow-container">{renderSpinner()}</div> : renderSpinner();
});
