/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, useContext } from 'react';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';
import { DropdownContext } from './DropdownContext';

/**
 * Props.
 */
export type DropdownButtonProps = ButtonProps;

/**
 * Dropdown button component.
 *
 * @param {DropdownButtonProps} props - Props.
 * @returns React component.
 */
export const DropdownButton = ({ children, className }: DropdownButtonProps): ReactElement => {
    const { dropdownId, visible, onDropdownToggle } = useContext(DropdownContext);
    const iconName = `caret-${visible ? 'up' : 'down'}`;

    return (
        <Button
            id={dropdownId}
            active={visible}
            className={`dropdown-toggle ${className ? className : ''}`}
            onClick={onDropdownToggle}
        >
            {children}
            <Icon iconName={iconName} />
        </Button>
    );
};
