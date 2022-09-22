/**
 * @file React context.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { createContext, useContext } from 'react';
import { SelectOptionModel } from './SelectOptionModel';

/**
 * Context type.
 */
type SelectContextModel<T> = {
    /**
     * Selected option.
     */
    selectedOption?: SelectOptionModel<T>;
    /**
     * On select option.
     */
    onSelectOption: (option: SelectOptionModel<T>) => void;
    /**
     * Allows to select multiply options.
     */
    multiple: boolean;
};

/**
 * Select context.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SelectContext = createContext({} as SelectContextModel<any>);

/**
 * Use select generic context helper.
 *
 * @returns Use context helper.
 */
export const useSelectContext = <T>(): SelectContextModel<T> => useContext(SelectContext);
