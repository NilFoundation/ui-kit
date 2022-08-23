/**
 * @file React context.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { createContext } from 'react';

/**
 * Context type.
 */
type NavListContextModel = {
    onToggle?: () => void;
};

/**
 * Navlist context.
 */
export const NavListContext = createContext<NavListContextModel>({} as NavListContextModel);
