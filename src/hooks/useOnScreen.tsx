/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { RefObject, useEffect, useState } from 'react';

/**
 * Hook detects wether element is on screen or not.
 *
 * @param ref - Ref.
 * @param [detectFullVisibility = true] - Return true only if element is fully visible.
 * @returns - Is element on screen.
 */
export const useOnScreen = <T extends HTMLElement>(
    ref: RefObject<T>,
    detectFullVisibility = true,
): boolean => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            {
                threshold: Number(detectFullVisibility),
            },
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, detectFullVisibility]);

    return isIntersecting;
};
