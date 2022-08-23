/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @file Helper function.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

/**
 * Throttles callback execution.
 *
 * @param callback - Callback to throttle.
 * @param [wait = 100] - Wait time.
 * @returns - Throttled callback.
 */
export const throttle = <T extends any[]>(callback: (...args: [...T]) => void, wait = 100) => {
    let isThrottled = false;
    let savedArgs: [...T] | null;

    const wrapper = (...args: [...T]) => {
        if (isThrottled) {
            savedArgs = args;
            return;
        }

        callback(...args);
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;

            if (savedArgs) {
                callback(...savedArgs);
                savedArgs = null;
            }
        }, wait);
    };

    return wrapper;
};
