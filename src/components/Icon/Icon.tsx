/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import clsx from 'clsx';
import React, { HTMLAttributes, ReactElement } from 'react';
import { Size } from '../../enums';
import './Icon.scss';

/**
 * Props.
 */
export type IconProps = {
    iconName: string;
    size?: Size,
} & HTMLAttributes<HTMLElement>

/**
 * Basic icon component.
 *
 * @param {IconProps} props - Props.
 * @returns React component.
 */
export const Icon = ({iconName, size = Size.md, className, ...other}: IconProps): ReactElement => {
    const iconClassName = clsx(
        'fa',
        `fa-${iconName}`,
        `icon-${size}`,
        className && className
    );

    return (
        <i className={iconClassName} {...other} />
    );
};
