/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { HTMLAttributes, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Size } from '../../enums';

/**
 * Props.
 */
export type ButtonGroupProps = {
    /**
     * Component children.
     */
    children?: ReactNode;
    /**
     * Component size.
     */
    size?: Size;
    /**
     * Make a set of buttons appear vertically.
     */
    vertical?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Button group component.
 *
 * @param {ButtonGroupProps} props - Props.
 * @returns React component.
 */
export const ButtonGroup = ({
    className,
    size = Size.md,
    children,
    vertical,
}: ButtonGroupProps): ReactElement => {
    const buttonGroupClassName = clsx(
        `btn-group${vertical ? '-vertical' : ''}`,
        className && className,
        size !== Size.md && `btn-group-${size}`,
    );

    return (
        <div
            role="group"
            className={buttonGroupClassName}
        >
            {children}
        </div>
    );
};
