/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {forwardRef, TextareaHTMLAttributes} from 'react';
import clsx from 'clsx';
import './TextArea.scss';

/**
 * Props.
 */
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    fixedHeight?: boolean;
    maxHeight?: `${number}px`
}

/**
 * Basic textArea component.
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({
        className,
        disabled = false,
        fixedHeight,
        ...restProps
    }: TextAreaProps, ref) => {
        const inputClassName = clsx(
            'form-control',
            className && className,
            disabled && 'input-disabled',
            fixedHeight && 'fixedHeight'
        );

        return (
            <textarea
                disabled={disabled}
                className={inputClassName}
                ref={ref}
                {...restProps}
            />
        );
    }
);
