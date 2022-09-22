/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
export interface FormGroupProps {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Has error.
     */
    hasError?: boolean;
    /**
     * Has error.
     */
    hasWarning?: boolean;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
}

/**
 * Form group component.
 *
 * @param {FormGroupProps} props - Props.
 * @returns - React component.
 */
export const FormGroup = ({
    className,
    hasError,
    hasWarning,
    children,
}: FormGroupProps): ReactElement => {
    const formGroupClassName = clsx(
        'form-group',
        className && className,
        hasError && 'has-error',
        hasWarning && 'has-warning',
    );

    return <div className={formGroupClassName}>{children}</div>;
};
