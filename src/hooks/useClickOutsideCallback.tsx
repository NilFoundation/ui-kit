/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { useEffect, RefObject } from 'react';

/**
 * Executes callback when user clicks outside ref element.
 *
 * @param ref - Ref.
 * @param callback - Callback.
 * @param [isElementVisible = false] - Is element visible (Important when just hiding, not destroying element).
 */
export const useClickOutsideCallback = (
    ref: RefObject<HTMLElement>,
    callback: () => void,
    isElementVisible = false,
): void => {
    useEffect(() => {
        const handleClick = (evt: Event): void => {
            if (!isElementVisible) {
                return;
            }

            if (!ref.current) {
                return;
            }

            if (!(evt.target instanceof Node)) {
                return;
            }

            if (ref.current.contains(evt.target)) {
                return;
            }

            callback();
            evt.stopPropagation();
            evt.preventDefault();
        };

        document.addEventListener('click', handleClick, { capture: true });

        return (): void => {
            document.removeEventListener('click', handleClick, {
                capture: true,
            });
        };
    }, [ref, callback, isElementVisible]);
};
