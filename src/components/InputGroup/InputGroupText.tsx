/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { DetailedHTMLProps, HTMLAttributes, ReactElement, forwardRef } from 'react';
import clsx from 'clsx';

/**
 * Input group text props.
 */
export type InputGroupTextProps = Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    'ref'
>;

/**
 * Input group text component.
 *
 * @param {InputGroupTextProps} props - Props.
 * @returns - React component.
 */
export const InputGroupText = forwardRef<HTMLSpanElement, InputGroupTextProps>(
    function InputGroupText({ className, children, ...rest }, ref): ReactElement {
        const inputIconClassName = clsx('input-group-text', className && className);

        return (
            <span
                ref={ref}
                className={inputIconClassName}
                {...rest}
            >
                {children}
            </span>
        );
    },
);
