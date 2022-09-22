/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
export interface FormHintProps {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
}

/**
 * Form hint component.
 *
 * @param {FormHintProps} props - Props.
 * @returns - React component.
 */
export const FormHint = ({ className, children }: FormHintProps): ReactElement => {
    const formHintClassName = clsx('help-block', className && className);

    return <p className={formHintClassName}>{children}</p>;
};
