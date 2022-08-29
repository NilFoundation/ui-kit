/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, KeyboardEvent, ReactNode } from 'react';
import clsx from 'clsx';
import { useKeyPress } from '../../hooks';
import { KeyboardEventKey } from '../../enums';

/**
 * Props.
 */
export type MenuItemProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Makes element non-interactive.
     */
    disabled?: boolean;
    /**
     * Applies active state.
     */
    active?: boolean;
    /**
     * On select callback.
     */
    onSelect?: () => void;
    /**
     * Provide href to use MenuItem like a link.
     */
    href?: string;
};

/**
 * Menu item component.
 *
 * @param {MenuItemProps} props - Props.
 * @returns React component.
 */
export const MenuItem = ({
    children,
    className,
    disabled,
    active,
    onSelect,
    href,
}: MenuItemProps): ReactElement => {
    const itemClassName = clsx(active && 'active', className && className, disabled && 'disabled');

    const onSelectHandler = (): void => {
        onSelect && !disabled && onSelect();
    };

    const [onSelectWithKey] = useKeyPress<KeyboardEvent<HTMLLIElement>>(onSelectHandler, [
        KeyboardEventKey.enter,
        KeyboardEventKey.space,
    ]);

    const onKeyPressHandler = (e: KeyboardEvent<HTMLLIElement>): void => {
        onSelectWithKey(e);
    };

    return (
        <li
            className={itemClassName}
            role="menuitem"
            onClick={onSelectHandler}
            onKeyPress={onKeyPressHandler}
            tabIndex={disabled ? -1 : 0}
        >
            <a href={href}>{children}</a>
        </li>
    );
};
