/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Variant, Size } from '../../enums';
import './Spinner-BS-5.scss'; // TODO - remove after migrating to BS5.

/**
 * Props.
 */
export type SpinnerProps = {
    variant?: Variant;
    size?: Size;
};

/**
 * Spinner component.
 *
 * @param {SpinnerProps} props - Props.
 * @returns React component.
 */
export const Spinner = ({
    variant = Variant.default,
    size = Size.md,
}: SpinnerProps): ReactElement => {
    const spinnerClassName = clsx(
        `spinner-border${size !== Size.md ? `-${size}` : ''}`,
        variant !== Variant.default && `text-${variant}`,
    );

    return (
        <div
            className={spinnerClassName}
            role="status"
        >
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};
