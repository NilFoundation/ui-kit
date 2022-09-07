/**
 * @file React context.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { createContext } from 'react';

/**
 * Context type.
 */
type CollapseContextContextModel = {
    /**
     * Is content visible.
     */
    isOpen: boolean;
    /**
     * Visibility setter;
     */
    toggleIsOpen: () => void;
};

/**
 * Collapse internal state context.
 */
export const CollapseContext = createContext<CollapseContextContextModel>(
    {} as CollapseContextContextModel,
);
