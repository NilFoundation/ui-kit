/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, useContext } from 'react';
import { DropdownContext } from './DropdownContext';
import { MenuItem, MenuItemProps } from '../Menu';

/**
 * Props.
 */
export type DropdownItemProps = MenuItemProps;

/**
 * Dropdown menuitem component.
 *
 * @param {DropdownItemProps} props - Props.
 * @returns React component.
 */
export const DropdownItem = ({
    children,
    onSelect,
    disabled,
    ...rest
}: DropdownItemProps): ReactElement => {
    const { onDropdownToggle } = useContext(DropdownContext);

    const dropdownItemSelectHandler = (): void => {
        if (disabled) {
            return;
        }

        onSelect && onSelect();
        onDropdownToggle(false);
    };

    return (
        <MenuItem
            onSelect={dropdownItemSelectHandler}
            disabled={disabled}
            {...rest}
        >
            {children}
        </MenuItem>
    );
};
