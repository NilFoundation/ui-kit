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
    /**
     * Provide href to render anchor, styled as button.
     */
    href?: string;
} & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    HTMLButtonElement
>;

/**
 * Base button component.
 *
 * @param {ButtonProps} props - Props.
 * @returns React component.
 */
export const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, ButtonProps>(
    function Button(
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
            role,
            href,
            type,
        }: ButtonProps,
        ref,
    ) {
        const Component = href ? 'a' : 'button';
        const computedRole = href ? role ?? 'button' : role;
        const computedType = href ? undefined : type ?? 'button';
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
            <Component
                href={href}
                type={computedType}
                disabled={disabled}
                onClick={onClick}
                className={buttonClassName}
                ref={ref}
                role={computedRole}
            >
                {children}
            </Component>
        );
    },
);
