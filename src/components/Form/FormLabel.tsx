/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { DetailedHTMLProps, LabelHTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
export type FormLabelProps = DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
>;

/**
 * Form label component.
 *
 * @param {FormLabelProps} props - Props.
 * @returns - React component.
 */
export const FormLabel = ({ className, children, ...rest }: FormLabelProps): ReactElement => {
    const formLabelClassName = clsx('control-label', className && className);

    return (
        <label
            className={formLabelClassName}
            {...rest}
        >
            {children}
        </label>
    );
};
