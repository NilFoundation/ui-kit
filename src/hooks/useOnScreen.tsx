/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { RefObject, useEffect, useState, useMemo } from 'react';

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

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
                threshold: Number(detectFullVisibility),
            }),
        [detectFullVisibility],
    );

    useEffect(() => {
        if (!ref.current) {
            return;
        }
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [observer, ref]);

    return isIntersecting;
};
