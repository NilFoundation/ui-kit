/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useRef, useEffect } from 'react';
import { useClickOutsideCallback, useEventListener } from '../../hooks';
import { Portal } from '../Portal';
import { MenuGroup } from './MenuGroup';
import { MenuItem } from './MenuItem';

/**
 * Props.
 */
export type MenuProps = {
    children: ReactNode;
    onSetVisible: () => void;
    className?: string;
    labeledBy?: string;
    autoFocus?: boolean;
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
    onSetVisible,
    labeledBy,
    autoFocus = true,
}: MenuProps): ReactElement => {
    const ref = useRef<HTMLUListElement>(null);

    useEffect(() => {
        autoFocus && ref.current && ref.current.focus();
    }, [ref]);

    useClickOutsideCallback(ref, onSetVisible);
    useEventListener({
        eventType: 'scroll',
        ref,
        throttled: true,
        callback: onSetVisible,
    });

    return (
        <Portal>
            <ul
                className={`dropdown-menu ${className ? className : ''}`}
                role="menu"
                aria-labelledby={labeledBy}
                ref={ref}
            >
                {children}
            </ul>
        </Portal>
    );
};

/**
 * Component extensions.
 */
Menu.ItemGroup = MenuGroup;
Menu.Item = MenuItem;
