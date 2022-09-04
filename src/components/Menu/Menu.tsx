/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useRef, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { useClickOutsideCallback, useEventListener, useKeyPress } from '../../hooks';
import { MenuHeader } from './MenuHeader';
import { MenuItem } from './MenuItem';
import { KeyboardEventKey } from '../../enums';
import { MenuDivider } from './MenuDivider';
import './Menu.scss';

/**
 * Props.
 */
export type MenuProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Menu visibility.
     */
    visible: boolean;
    /**
     * Callback on menu close.
     */
    onCloseMenu?: () => void;
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
        visible && onCloseMenu && onCloseMenu();
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
Menu.Header = MenuHeader;
Menu.Item = MenuItem;
Menu.Divider = MenuDivider;
