/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Size } from '../../enums';

/**
 * Form control props.
 */
export interface FormControlProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: keyof typeof Size;
}

/**
 * Form control component.
 */
export const FormControl = forwardRef<HTMLInputElement, FormControlProps>(function FormControl(
    { size = Size.md, className, ...restProps }: FormControlProps,
    ref,
) {
    const inputClassName = clsx(
        'form-control',
        className && className,
        size !== Size.md && `form-control-${size}`,
    );

    return (
        <input
            ref={ref}
            {...restProps}
            className={inputClassName}
        />
    );
});
