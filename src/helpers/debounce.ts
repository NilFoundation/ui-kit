/**
 * @file Helper function.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

 /**
  * Debounces callback execution.
  * 
  * @param callback - Callback to debounce.
  * @param [wait = 100] - Wait time.
 */
export const debounce = <T extends any[]>(callback: (...args: [...T]) => void, wait = 100) => {
    let timeoutId: NodeJS.Timeout;

    const wrapper = (...args: [...T]) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            callback(...args)
        }, wait);
    };

    return wrapper;
};
