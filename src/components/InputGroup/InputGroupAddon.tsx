/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
export type InputGroupAddonProps = {
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
 * Input group addon component.
 *
 * @param {InputGroupAddonProps} props - Props.
 * @returns - React component.
 */
export const InputGroupAddon = ({ className, children }: InputGroupAddonProps): ReactElement => {
    const inputIconClassName = clsx('input-group-addon', className && className);

    return <span className={inputIconClassName}>{children}</span>;
};
