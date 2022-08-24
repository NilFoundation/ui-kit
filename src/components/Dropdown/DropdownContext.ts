/**
 * @file React context.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { createContext } from 'react';

/**
 * Context type.
 */
type DropdownContextModel = {
    dropdownId: string;
    visible: boolean;
    onDropdownToggle: (isVisible: boolean) => void;
};

/**
 * Dropdown internal state context.
 */
export const DropdownContext = createContext<DropdownContextModel>({} as DropdownContextModel);
