/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    ReactNode,
    forwardRef,
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ForwardedRef,
    ElementType,
} from 'react';
import clsx from 'clsx';
import { Size, Variant } from '../../enums';

/**
 * Props.
 */
export type ButtonProps<T extends HTMLAnchorElement | HTMLButtonElement> = {
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
     * Provide href to render anchor, styled as button.
     */
    href?: string;
    /**
     * Disables button.
     */
    disabled?: boolean;
} & (T extends HTMLButtonElement
    ? ButtonHTMLAttributes<HTMLElement>
    : AnchorHTMLAttributes<HTMLElement>);

/**
 * Base button component.
 *
 * @param {ButtonProps} props - Props.
 * @returns React component.
 */
export const Button = forwardRef(function Button<T extends HTMLButtonElement | HTMLAnchorElement>(
    {
        className,
        variant = Variant.default,
        size = Size.md,
        disabled,
        children,
        block,
        onClick,
        active,
        role,
        href,
        type,
        ...rest
    }: ButtonProps<T>,
    ref: ForwardedRef<T>,
) {
    const Component = href ? 'a' : ('button' as ElementType);
    const computedRole = href ? role ?? 'button' : role;
    const computedType = href ? undefined : type ?? 'button';
    const buttonClassName = clsx(
        'btn',
        `btn-${variant}`,
        className && className,
        size !== Size.md && `btn-${size}`,
        block && 'btn-block',
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
            {...rest}
        >
            {children}
        </Component>
    );
});
