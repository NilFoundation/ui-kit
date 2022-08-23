/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { KeyboardEvent } from 'react';
import { KeyboardEventKey } from '../enums';

/**
 * Returns callback with key pressed checking. Set allowedKeys empty to execute on every key press.
 *
 * @param callback - Callback.
 * @param allowedKeys - Array of allowed keys.
 * @param [preventDefault = true] - Prevent default browser events.
 * @returns - Key event listener.
 */
export const useKeyPress = <T extends HTMLElement>(
    callback: () => void,
    allowedKeys: KeyboardEventKey[],
    preventDefault = true,
): [onKeyPress: (e: KeyboardEvent<T>) => void] => {
    const onKeyPress = (e: KeyboardEvent) => {
        if (preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (allowedKeys.length === 0) {
            callback();
            return;
        }

        const { key } = e;

        if (!allowedKeys.some(k => k === key)) {
            return;
        }

        callback();
    };

    return [onKeyPress];
};
