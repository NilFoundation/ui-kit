/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { forwardRef, InputHTMLAttributes } from 'react';
import { Size } from '../../enums';
import clsx from 'clsx';
import './Input.scss';

/**
 * Props.
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: Size;
}

/**
 * Basic input component.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ size = Size.md, className, disabled = false, ...restProps }: InputProps, ref) => {
        const inputClassName = clsx(
            'input',
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
    },
);
