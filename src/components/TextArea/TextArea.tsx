/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * Disable textarea vertical resize.
     */
    fixedHeight?: boolean;
}

/**
 * Basic textArea component.
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
    { className, disabled, fixedHeight, ...restProps }: TextAreaProps,
    ref,
) {
    const inputClassName = clsx(
        'form-control',
        className && className,
        disabled && 'input-disabled',
        fixedHeight && 'fixedHeight',
    );

    return (
        <textarea
            disabled={disabled}
            className={inputClassName}
            ref={ref}
            {...restProps}
        />
    );
});
