/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';
import { Icon, IconProps } from '../Icon';
import clsx from 'clsx';

/**
 * Props.
 */
export type InputGroupIconProps = Omit<IconProps, 'size'>

/**
 * Input group icon component.
 *
 * @param {InputGroupIconProps} props - Props.
 * @returns - React component.
 */
export const InputGroupIcon = ({className, ...other}: InputGroupIconProps): ReactElement => {
    const inputIconClassName = clsx(
        'input-group-addon',
        className && className
    );

    return (
        <span
            className={inputIconClassName}>
            <Icon {...other} />
        </span>
    );
};
