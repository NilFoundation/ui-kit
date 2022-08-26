/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { HTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';
import { Size } from '../../enums';
import './Icon.scss';

/**
 * Props.
 */
export type IconProps = {
    /**
     * Icon name.
     */
    iconName: string;
    /**
     * Size of icon.
     */
    size?: Size;
    /**
     * Text, availiable only for screen readers.
     */
    srOnlyText?: string;
} & HTMLAttributes<HTMLElement>;

/**
 * Basic icon component.
 *
 * @param {IconProps} props - Props.
 * @returns React component.
 */
export const Icon = ({
    iconName,
    size = Size.md,
    className,
    srOnlyText,
    'aria-hidden': ariaHidden = true,
    ...other
}: IconProps): ReactElement => {
    const iconClassName = clsx('fa', `fa-${iconName}`, `icon-${size}`, className && className);

    return (
        <>
            <i
                className={iconClassName}
                aria-hidden={ariaHidden}
                {...other}
            />
            {srOnlyText && <span className="sr-only">{srOnlyText}</span>}
        </>
    );
};
