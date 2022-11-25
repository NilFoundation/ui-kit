/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { DetailedHTMLProps, forwardRef, HTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';
import { Size } from '../../enums';

/**
 * Button group props.
 */
export type ButtonGroupProps = {
    /**
     * Component size.
     */
    size?: keyof typeof Size;
    /**
     * Make a set of buttons appear vertically.
     */
    vertical?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * Button group component.
 *
 * @param {ButtonGroupProps} props - Props.
 * @returns React component.
 */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(function ButtonGroup(
    { className, size = 'md', children, vertical },
    ref,
): ReactElement {
    const buttonGroupClassName = clsx(
        `btn-group${vertical ? '-vertical' : ''}`,
        className && className,
        size !== 'md' && `btn-group-${size}`,
    );

    return (
        <div
            role="group"
            className={buttonGroupClassName}
            ref={ref}
        >
            {children}
        </div>
    );
});
