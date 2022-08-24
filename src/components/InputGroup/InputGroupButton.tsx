/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Button, ButtonProps } from '../Button';

/**
 * Props.
 */
export type InputGroupButtonProps = Omit<ButtonProps, 'size'>;

/**
 * Input group button component.
 *
 * @param {InputGroupButtonProps} props - Props.
 * @returns - React component.
 */
export const InputGroupButton = ({ className, ...other }: InputGroupButtonProps): ReactElement => {
    const inputButtonClassName = clsx('input-group-btn', className && className);

    return (
        <span className={inputButtonClassName}>
            <Button {...other} />
        </span>
    );
};
