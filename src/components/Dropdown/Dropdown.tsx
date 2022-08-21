/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useState } from 'react';
import { DropdownButton } from './DropdownButton';
import { DropdownContext } from './DropdownContext';
import { DropdownMenu } from './DropdownMenu';
import { uniqueId } from '../../helpers';

/**
 * Props.
 */
export type DropdownProps = {
    children: ReactNode,
    className?: string;
};

/**
 * Base dropdown component.
 *
 * @param {DropdownProps} props - Props.
 * @returns React component.
 */
export const Dropdown = ({children}: DropdownProps): ReactElement => {
    const [visible, setVisible] = useState(false);
    const onDropdownToggle = (): void => setVisible(!visible);
    const dropdownId = uniqueId('dropdownMenu');

    return (
        <div className="dropdown">
            <DropdownContext.Provider value={{ dropdownId, visible, onDropdownToggle }}>
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
