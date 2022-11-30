/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, forwardRef } from 'react';
import clsx from 'clsx';
import { Variant } from '../../enums';
import { CloseButton } from '../Button';
import { getCloseButtonLightProp } from '../../_helpers';

/**
 * Label props.
 */
export type LabelProps = {
    /**
     * Color scheme.
     *
     * @default secondary
     */
    variant?: keyof typeof Variant;
    /**
     * Increases border radius.
     */
    rounded?: boolean;
    /**
     * Close callback.
     */
    onClose?: () => void;
} & Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'ref'>;

/**
 * Label component.
 *
 * @param {LabelProps} props - Props.
 * @returns React component.
 */
export const Label = forwardRef<HTMLSpanElement, LabelProps>(function Label(
    { className, variant = 'secondary', children, rounded, onClose, ...rest },
    ref,
): ReactElement {
    const labelClassName = clsx(
        className,
        'badge',
        `text-bg-${variant}`,
        rounded && 'rounded-pill',
        onClose && 'd-inline-flex align-items-center',
    );

    return (
        <span
            className={labelClassName}
            ref={ref}
            {...rest}
        >
            {children && children}
            {onClose && (
                <CloseButton
                    onClick={onClose}
                    className="ms-1"
                    light={getCloseButtonLightProp(variant)}
                />
            )}
        </span>
    );
});
