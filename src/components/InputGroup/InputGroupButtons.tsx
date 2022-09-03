/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
export type InputGroupButtonsProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
};

/**
 * Input group buttons component.
 *
 * @param {InputGroupButtonsProps} props - Props.
 * @returns - React component.
 */
export const InputGroupButtons = ({
    className,
    children,
}: InputGroupButtonsProps): ReactElement => {
    const inputButtonClassName = clsx('input-group-btn', className && className);

    return <div className={inputButtonClassName}>{children}</div>;
};
