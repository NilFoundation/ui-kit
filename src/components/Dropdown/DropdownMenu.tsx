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
export type DropdownMenuProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
};

/**
 * Dropdown menu component.
 *
 * @param {DropdownMenuProps} props - Props.
 * @returns React component.
 */
export const DropdownMenu = ({ children, className }: DropdownMenuProps): ReactElement => {
    const { dropdownId, visible, onDropdownToggle } = useContext(DropdownContext);

    return (
        <Menu
            onCloseMenu={() => onDropdownToggle(false)}
            visible={visible}
            aria-labelledby={dropdownId}
            className={className}
        >
            {children}
        </Menu>
    );
};
