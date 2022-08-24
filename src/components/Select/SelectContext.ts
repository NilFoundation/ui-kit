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
    selected?: SelectOptionModel<T>;
    onSelectOption: (option: SelectOptionModel<T>) => void;
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
