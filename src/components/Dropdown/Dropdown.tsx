/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useState } from 'react';
import { DropdownButton } from './DropdownButton';
import { DropdownContext } from './DropdownContext';
import { DropdownMenu } from './DropdownMenu';
import { DropdownItem } from './DropdownItem';

/**
 * Props.
 */
export type DropdownProps = {
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
 * Dropdown component.
 *
 * @param {DropdownProps} props - Props.
 * @returns React component.
 */
export const Dropdown = ({ children, className }: DropdownProps): ReactElement => {
    const [visible, setVisible] = useState(false);
    const onDropdownToggle = (isVisible: boolean): void => setVisible(isVisible);

    return (
        <div className={`dropdown ${className ? className : ''}`}>
            <DropdownContext.Provider value={{ visible, onDropdownToggle }}>
                {children}
            </DropdownContext.Provider>
        </div>
    );
};

/**
 * Component extensions.
 */
Dropdown.Menu = DropdownMenu;
Dropdown.Button = DropdownButton;
Dropdown.Item = DropdownItem;
