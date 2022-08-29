/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { KeyboardEvent as ElementKeyboardEvent } from 'react';
import { KeyboardEventKey } from '../enums';

/**
 * Hook settings.
 */
type UseKeyPressSettings = {
    /**
     * Prevent default browser events.
     */
    preventDefault?: boolean;
};

/**
 * Returns callback with key pressed checking.
 * If allowedKeys are empty, no callback execution will happen.
 *
 * @param callback - Callback.
 * @param allowedKeys - Array of allowed keys.
 * @param {UseKeyPressSettings} settings - Prevent default browser events.
 * @returns - Key event listener.
 */
export const useKeyPress = <T extends KeyboardEvent | ElementKeyboardEvent>(
    callback: () => void,
    allowedKeys: KeyboardEventKey[],
    { preventDefault }: UseKeyPressSettings = { preventDefault: true },
): [onKeyPress: (e: T) => void] => {
    const onKeyPress = (e: T) => {
        if (allowedKeys.length === 0) {
            return;
        }

        if (preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }

        const { key } = e;

        if (!allowedKeys.some(k => k === key)) {
            return;
        }

        callback();
    };

    return [onKeyPress];
};
