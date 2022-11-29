/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, ReactElement } from 'react';
import clsx from 'clsx';

/**
 * Close button props.
 */
export type CloseButtonProps = Omit<
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'ref'
>;

/**
 * Close button component.
 *
 * @param {CloseButtonProps} props - Props.
 * @returns React component.
 */
export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(function CloseButton(
    { className, ...rest },
    ref,
): ReactElement {
    const btnClassName = clsx('btn-close', className);

    return (
        <button
            className={btnClassName}
            aria-label="Close"
            ref={ref}
            {...rest}
        />
    );
});
