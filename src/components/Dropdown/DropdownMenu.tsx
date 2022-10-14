/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';
import { DropdownContext } from './DropdownContext';
import { Menu, MenuProps } from '../Menu';
import { HorizontalPosition } from '../../enums';

/**
 * Props.
 */
export type DropdownMenuProps = Omit<MenuProps, 'visible' | 'onCloseMenu'> & {
    align?: HorizontalPosition;
};

/**
 * Dropdown menu component.
 *
 * @param {DropdownMenuProps} props - Props.
 * @returns React component.
 */
export const DropdownMenu = ({
    children,
    className,
    align = 'left',
    ...rest
}: DropdownMenuProps): ReactElement => {
    const { visible, onDropdownToggle } = useContext(DropdownContext);
    const menuClassName = clsx(className && className, align === 'right' && 'dropdown-menu-right');
    const nodeRef = useRef(null);

    return (
        <CSSTransition
            classNames="fade"
            timeout={300}
            unmountOnExit
            in={visible}
            nodeRef={nodeRef}
        >
            <Menu
                onCloseMenu={() => onDropdownToggle(false)}
                visible
                ref={nodeRef}
                className={menuClassName}
                {...rest}
            >
                {children}
            </Menu>
        </CSSTransition>
    );
};
