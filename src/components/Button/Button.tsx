/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode, forwardRef } from 'react';
import clsx from 'clsx';
import { Size, Variant } from '../../enums';
import './Button.scss';

/**
 * Props.
 */
export type ButtonProps = {
    /**
     * Component children.
     */
    children?: ReactNode;
    /**
     * Button color scheme.
     */
    variant?: Variant;
    /**
     * Button size.
     */
    size?: Size;
    /**
     * Makes button to span the entire width of the parent element.
     */
    block?: boolean;
    /**
     * Applies active state to button.
     */
    active?: boolean;
    /**
     * Removes button background.
     */
    outlined?: boolean;
    /**
     * Gives button shape of a circle.
     */
    rounded?: boolean;
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'>;

/**
 * Base button component.
 *
 * @param {ButtonProps} props - Props.
 * @returns React component.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        className,
        variant = Variant.default,
        size = Size.md,
        disabled,
        children,
        block,
        onClick,
        active,
        outlined,
        rounded,
    }: ButtonProps,
    ref,
) {
    const buttonClassName = clsx(
        'btn',
        `btn-${variant}`,
        className && className,
        size !== Size.md && `btn-${size}`,
        block && 'btn-block',
        active && 'active',
        outlined && 'btn-outline',
        rounded && 'btn-rounded',
    );

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={buttonClassName}
            ref={ref}
        >
            {children}
        </button>
    );
});
