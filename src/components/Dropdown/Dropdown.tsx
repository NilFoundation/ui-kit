/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useRef, useState } from 'react';
import clsx from 'clsx';
import { DropdownButton } from './DropdownButton';
import { DropdownContext } from './DropdownContext';
import { DropdownMenu } from './DropdownMenu';
import { DropdownItem } from './DropdownItem';
import { MenuDivider } from '../Menu';

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
    /**
     * Expand dropdown menu upwards.
     */
    dropup?: boolean;
};

/**
 * Dropdown component.
 *
 * @param {DropdownProps} props - Props.
 * @returns React component.
 */
export const Dropdown = ({ children, className, dropup }: DropdownProps): ReactElement => {
    const [visible, setVisible] = useState(false);
    const onDropdownToggle = (isVisible: boolean): void => setVisible(isVisible);
    const dropdownClassName = clsx(className && className, dropup ? 'dropup' : 'dropdown');
    const timeOutIdRef = useRef<NodeJS.Timeout>();

    const onBlurHandler = () => {
        timeOutIdRef.current = setTimeout(() => {
            onDropdownToggle(false);
        });
    };

    const onFocusHandler = () => {
        clearTimeout(timeOutIdRef.current);
    };

    return (
        <div
            className={dropdownClassName}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
        >
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
Dropdown.Divider = MenuDivider;
