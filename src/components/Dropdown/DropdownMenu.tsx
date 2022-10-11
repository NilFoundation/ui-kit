/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { DropdownContext } from './DropdownContext';
import { Menu, MenuProps } from '../Menu';

/**
 * Props.
 */
export type DropdownMenuProps = Omit<MenuProps, 'visible' | 'onCloseMenu'>;

/**
 * Dropdown menu component.
 *
 * @param {DropdownMenuProps} props - Props.
 * @returns React component.
 */
export const DropdownMenu = ({ children, ...rest }: DropdownMenuProps): ReactElement => {
    const { visible, onDropdownToggle } = useContext(DropdownContext);
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
                {...rest}
            >
                {children}
            </Menu>
        </CSSTransition>
    );
};
