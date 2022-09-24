/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    ReactNode,
    HTMLAttributes,
    forwardRef,
    ForwardRefExoticComponent,
    RefAttributes,
} from 'react';
import clsx from 'clsx';
import {
    useClickOutsideCallback,
    useCombinedRef,
    useEventListener,
    useKeyPress,
} from '../../hooks';
import { MenuHeader } from './MenuHeader';
import { MenuItem } from './MenuItem';
import { KeyboardEventKey } from '../../enums';
import { MenuDivider } from './MenuDivider';
import { useMenuKeyboardNavigation } from '../../hooks/_useMenuKeyboardNavigation';
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
 * Compounded component type.
 */
type CompoundedMenuComponent = {
    Header: typeof MenuHeader;
    Item: typeof MenuItem;
    Divider: typeof MenuDivider;
} & ForwardRefExoticComponent<MenuProps & RefAttributes<HTMLUListElement>>;

/**
 * Menu component.
 *
 * @param {MenuProps} props - Props.
 * @returns React component.
 */
export const Menu = forwardRef<HTMLUListElement, MenuProps>(function Menu(
    { children, className, onCloseMenu, visible, role = 'menu', ...rest }: MenuProps,
    ref,
) {
    const menuClassName = clsx('dropdown-menu', className && className, !visible && 'hidden');

    const onCloseHandler = (): void => {
        visible && onCloseMenu && onCloseMenu();
    };

    const [onEscapePress] = useKeyPress(onCloseHandler, [KeyboardEventKey.escape]);

    const { localRef, forwardedRef } = useCombinedRef(ref);

    useClickOutsideCallback(localRef, onCloseHandler, visible);
    useEventListener({
        eventType: 'scroll',
        throttled: true,
        callback: onCloseHandler,
    });
    useEventListener({ eventType: 'keydown', callback: onEscapePress });
    useMenuKeyboardNavigation(localRef);

    return (
        <ul
            className={menuClassName}
            role={role}
            ref={forwardedRef}
            {...rest}
        >
            {children}
        </ul>
    );
}) as CompoundedMenuComponent;

/**
 * Component extensions.
 */
Menu.Header = MenuHeader;
Menu.Item = MenuItem;
Menu.Divider = MenuDivider;
