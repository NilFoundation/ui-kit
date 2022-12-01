/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

/**
 * TextArea props.
 */
export type TextAreaProps = {
    /**
     * Disable textarea vertical resize.
     */
    fixedHeight?: boolean;
} & Omit<
    DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
    'ref'
>;

/**
 * TextArea component.
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
    { className, fixedHeight, ...restProps }: TextAreaProps,
    ref,
) {
    const inputClassName = clsx('form-control', className, fixedHeight && 'fixedHeight');

    return (
        <textarea
            className={inputClassName}
            ref={ref}
            {...restProps}
        />
    );
});
