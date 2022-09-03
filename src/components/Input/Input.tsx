/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Size } from '../../enums';
import { InputSize } from '../../models';
import './Input.scss';

/**
 * Props.
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: InputSize;
}

/**
 * Basic input component.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { size = Size.md, className, disabled = false, ...restProps }: InputProps,
    ref,
) {
    const inputClassName = clsx(
        'form-control',
        className && className,
        disabled && 'input-disabled',
        size !== Size.md && `input-${size}`,
    );

    return (
        <input
            disabled={disabled}
            ref={ref}
            {...restProps}
            className={inputClassName}
        />
    );
});
