/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, AnchorHTMLAttributes, MouseEvent } from 'react';
import clsx from 'clsx';
import { Variant } from '../../enums';

/**
 * Props.
 */
export interface ListGroupItemProps {
    /**
     * Component children.
     */
    children?: ReactNode;
    /**
     * Provide active state.
     */
    active?: boolean;
    /**
     * Disable item.
     */
    disabled?: boolean;
    /**
     * Provide color scheme.
     */
    variant?: Variant;
    /**
     * Href.
     */
    href?: string;
    /**
     * OnClick callback.
     */
    onClick?: () => void;
}

/**
 * List group item component.
 *
 * @param {ListGroupItemProps} props - Props.
 * @returns - React component.
 */
export const ListGroupItem = ({
    children,
    active,
    disabled,
    variant = Variant.primary,
    href,
    onClick,
}: ListGroupItemProps): ReactElement => {
    const Component = href || onClick ? 'a' : 'div';

    const listItemClassName = clsx(
        'list-group-item',
        `list-group-item-${variant}`,
        active && 'active',
        disabled && 'disabled',
    );

    const handleNativeAnchorElementClick = (e: MouseEvent) => {
        if (disabled) {
            e.stopPropagation();
            e.preventDefault();
            return;
        }

        onClick && onClick();
    };

    const props: AnchorHTMLAttributes<HTMLElement> = {
        className: listItemClassName,
        role: 'listitem',
        'aria-current': active ? 'true' : undefined,
        onClick: href || onClick ? handleNativeAnchorElementClick : undefined,
        href: onClick ? href ?? '#' : href,
    };

    if (disabled) {
        props['aria-disabled'] = true;
    }

    return <Component {...props}>{children}</Component>;
};
