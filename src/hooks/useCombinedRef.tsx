/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { useRef, ForwardedRef } from 'react';

/**
 * Hook allows you to use ref objects in forwardRef-based components.
 * Basically, it assignes both forwardedRef and common refObject to the same HTML element.
 *
 * @param ref - Ref.
 * @returns - Is element on screen.
 */
export const useCombinedRef = <T extends HTMLElement>(ref: ForwardedRef<T>) => {
    const localRef = useRef<T | null>(null);

    const forwardedRef = (node: T | null) => {
        localRef.current = node;

        if (typeof ref === 'function') {
            ref(node);
        } else if (ref) {
            ref.current = node;
        }
    };

    return { localRef, forwardedRef };
};
