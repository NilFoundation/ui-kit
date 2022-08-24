/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useContext } from 'react';
import { DropdownContext } from './DropdownContext';
import { Menu } from '../Menu';

/**
 * Props.
 */
export type DropdownProps = {
    children: ReactNode;
    className?: string;
};

/**
 * Dropdown menu component.
 *
 * @param {DropdownProps} props - Props.
 * @returns React component.
 */
export const DropdownMenu = ({ children, className }: DropdownProps): ReactElement => {
    const { dropdownId, visible, onDropdownToggle } = useContext(DropdownContext);

    return (
        <Menu
            onCloseMenu={() => onDropdownToggle(false)}
            visible={visible}
            labeledBy={dropdownId}
            className={className}
        >
            {children}
        </Menu>
    );
};
