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
 */
export const useClickOutsideCallback = (ref: RefObject<HTMLElement>, callback: () => void): void => {
    useEffect(() => {
        const handleClick = (evt: Event): void => {
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

        document.addEventListener('click', handleClick, {capture: true});

        return (): void => {
            document.removeEventListener('click', handleClick, {capture: true});
        };
    }, [ref, callback]);
};
