/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {ReactElement, ReactNode, AnchorHTMLAttributes, MouseEvent} from 'react';
import { Variant } from '../../enums';
import clsx from 'clsx';

/**
 * Props.
 */
export interface ListGroupItemProps {
    children?: ReactNode;
    active?: boolean;
    disabled?: boolean;
    variant?: Variant;
    href?: string;
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
    variant = Variant.default,
    href,
    onClick
}: ListGroupItemProps): ReactElement => {
    const Component = href || onClick ? 'a' : 'div';

    const listItemClassName = clsx(
        'list-group-item',
        `list-group-item-${variant}`,
        active && 'active',
        disabled && 'disabled'
    );

    const props: AnchorHTMLAttributes<HTMLElement> = {
        className: listItemClassName,
        role: 'listitem'
    };

    const handleNativeAnchorElementClick = (e: MouseEvent) => {
        if (disabled) {
            e.stopPropagation();
            e.preventDefault();
            return;
        }

        onClick && onClick();
    };

    if (onClick) {
        props.onClick = handleNativeAnchorElementClick;
        props.href = '#';
    } else if (href) {
        props.href = href;
    }

    if (disabled) {
        props['aria-disabled'] = true;
        props.tabIndex = -1;
    }

    return (
        <Component {...props}>
            {children}
        </Component>
    );
};
