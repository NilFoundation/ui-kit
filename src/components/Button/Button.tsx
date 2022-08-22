/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Size, Variant } from '../../enums';

/**
 * Props.
 */
export type ButtonProps = {
    /**
     * Component children.
     */
    children?: ReactNode,
    /**
     * Button color sheme.
     */
    variant?: Variant,
    /**
     * Button size.
     */
    size?: Size,
    /**
     * Applies outline styles.
     */
    outline?: boolean,
    /**
     * Makes button to span the entire width of the parent element.
     */
    block?: boolean;
    /**
     * Applies active state to button.
     */
    active?: boolean;
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'>;

/**
 * Base button component.
 *
 * @param {ButtonProps} props - Props.
 * @returns React component.
 */
export const Button = ({
    className,
    variant = Variant.default,
    size = Size.md,
    outline,
    disabled,
    children,
    block,
    onClick,
    active
}: ButtonProps): ReactElement => {
    const buttonClassName = clsx(
        'btn',
        `btn-${variant}`,
        outline && 'btn-outline',
        className && className,
        size !== Size.md && `btn-${size}`,
        block && 'btn-block',
        active && 'active'
    );

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={buttonClassName}>
            { children }
        </button>
    );
};
