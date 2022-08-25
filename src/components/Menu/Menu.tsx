/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useRef } from 'react';
import clsx from 'clsx';
import { useClickOutsideCallback, useEventListener } from '../../hooks';
import { MenuGroup } from './MenuGroup';
import { MenuItem } from './MenuItem';

/**
 * Props.
 */
export type MenuProps = {
    children: ReactNode;
    visible: boolean;
    onCloseMenu: () => void;
    className?: string;
    labeledBy?: string;
};

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
    labeledBy,
    visible,
}: MenuProps): ReactElement => {
    const ref = useRef<HTMLUListElement>(null);

    const menuClassName = clsx('dropdown-menu', className && className, !visible && 'hidden');

    const onCloseHandler = (): void => {
        visible && onCloseMenu();
    };

    useClickOutsideCallback(ref, onCloseHandler, visible);

    useEventListener({
        eventType: 'scroll',
        ref,
        throttled: true,
        callback: onCloseHandler,
    });

    return (
        <ul
            className={menuClassName}
            role="menu"
            aria-labelledby={labeledBy}
            ref={ref}
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
