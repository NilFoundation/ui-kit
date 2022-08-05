/**
 * @file React context.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { createContext } from 'react';

/**
 * Context type.
 */
type PanelContextModel = {
    disabled: boolean;
    loading: boolean;
}

/**
 * Panel internal state context.
 */
export const PanelContext = createContext<PanelContextModel>({} as PanelContextModel);
