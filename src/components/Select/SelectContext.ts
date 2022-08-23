/**
 * @file React context.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { createContext, useContext, Context } from 'react';
import { SelectOptionModel } from './SelectOptionModel';

/**
 * Context type.
 */
type SelectContextModel<T> = {
    selected?: SelectOptionModel<T>;
    onSelectOption: (option: SelectOptionModel<T>) => void;
};

/**
 * Create select context helper.
 *
 * @returns Create context helper.
 */
export const createSelectContext = <T extends unknown>(): Context<SelectContextModel<T>> =>
    createContext({} as SelectContextModel<T>);

/**
 * Use select context helper.
 *
 * @returns Use context helper.
 */
export const useSelectContext = <T extends unknown>(): SelectContextModel<T> =>
    useContext(createSelectContext<T>());
