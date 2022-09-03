/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { HTMLAttributes, ElementType, ReactElement } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
export type IconProps = {
    /**
     * Icon name.
     */
    iconName: string;
    /**
     * Text, availiable only for screen readers.
     */
    srOnlyText?: string;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Icon html element.
     *
     * @default i
     */
    as?: ElementType;
} & HTMLAttributes<HTMLElement>;

/**
 * Basic icon component.
 *
 * @param {IconProps} props - Props.
 * @returns React component.
 */
export const Icon = ({
    iconName,
    className,
    srOnlyText,
    'aria-hidden': ariaHidden = true,
    as: Component = 'i',
    ...other
}: IconProps): ReactElement => {
    const iconClassName = clsx(iconName && iconName, className && className);

    return (
        <>
            <Component
                className={iconClassName}
                aria-hidden={ariaHidden}
                {...other}
            />
            {srOnlyText && <span className="sr-only">{srOnlyText}</span>}
        </>
    );
};
