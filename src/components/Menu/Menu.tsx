/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useRef, HTMLAttributes, AriaRole } from 'react';
import clsx from 'clsx';
import { useClickOutsideCallback, useEventListener, useKeyPress } from '../../hooks';
import { MenuGroup } from './MenuGroup';
import { MenuItem } from './MenuItem';
import { KeyboardEventKey } from '../../enums';
import './Menu.scss';

/**
 * Props.
 */
export type MenuProps = {
    children: ReactNode;
    visible: boolean;
    onCloseMenu: () => void;
    role?: AriaRole;
} & HTMLAttributes<HTMLUListElement>;

/**
 * Menu component.
 *
 * @param {MenuProps} props - Props.
 * @returns React component.
 */
export const Menu = ({
    children,
    className,
    onCloseMenu,
    visible,
    role = 'menu',
    ...rest
}: MenuProps): ReactElement => {
    const ref = useRef<HTMLUListElement>(null);

    const menuClassName = clsx('dropdown-menu', className && className, !visible && 'hidden');

    const onCloseHandler = (): void => {
        visible && onCloseMenu();
    };

    const [onEscapePress] = useKeyPress(onCloseHandler, [KeyboardEventKey.escape]);

    useClickOutsideCallback(ref, onCloseHandler, visible);
    useEventListener({
        eventType: 'scroll',
        ref,
        throttled: true,
        callback: onCloseHandler,
    });
    useEventListener({ eventType: 'keydown', ref, callback: onEscapePress });

    return (
        <ul
            className={menuClassName}
            role={role}
            ref={ref}
            {...rest}
        >
            {children}
        </ul>
    );
};

/**
 * Component extensions.
 */
Menu.ItemGroup = MenuGroup;
Menu.Item = MenuItem;
