/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    forwardRef,
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ForwardedRef,
    ElementType,
    DetailedHTMLProps,
} from 'react';
import clsx from 'clsx';
import { Size, Variant } from '../../enums';

/**
 * Button component props.
 */
export type ButtonProps<T extends HTMLAnchorElement | HTMLButtonElement = HTMLButtonElement> = {
    /**
     * Button color scheme.
     */
    variant?: keyof typeof Variant;
    /**
     * Button size.
     */
    size?: keyof typeof Size;
    /**
     * Applies active state to button.
     */
    active?: boolean;
    /**
     * Provide href to render anchor, styled as button.
     */
    href?: string;
    /**
     * Disables button.
     */
    disabled?: boolean;
    /**
     * Applies outline styling.
     */
    outline?: boolean;
} & (T extends HTMLButtonElement
    ? Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>
    : Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'ref'>);

/**
 * Button component.
 *
 * @param {ButtonProps} props - Props.
 * @returns React component.
 */
export const Button = forwardRef(function Button<T extends HTMLButtonElement | HTMLAnchorElement>(
    {
        className,
        variant = 'primary',
        size = 'md',
        disabled,
        children,
        onClick,
        active,
        role,
        href,
        type,
        outline,
        ...rest
    }: ButtonProps<T>,
    ref: ForwardedRef<T>,
) {
    const Component = href ? 'a' : ('button' as ElementType);
    const computedRole = href ? role ?? 'button' : role;
    const computedType = href ? undefined : type ?? 'button';
    const buttonClassName = clsx(
        'btn',
        outline ? `btn-outline-${variant}` : `btn-${variant}`,
        className && className,
        size !== Size.md && `btn-${size}`,
        active && 'active',
    );

    return (
        <Component
            href={href}
            type={computedType}
            disabled={disabled}
            onClick={onClick}
            className={buttonClassName}
            ref={ref}
            role={computedRole}
            aria-pressed={active}
            {...rest}
        >
            {children}
        </Component>
    );
});
