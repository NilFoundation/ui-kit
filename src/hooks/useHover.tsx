/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { useEffect, useState, useRef, RefObject } from 'react';
import { throttle } from '../helpers';

/**
 * useHover hook return type.
 */
export type UseHoverReturnType<T extends HTMLElement> = [RefObject<T>, boolean];

/**
 * Detect whether the mouse is hovering an element.
 *
 * @returns {UseHoverReturnType} ref and hover state.
 */
export const useHover = <T extends HTMLElement>(): UseHoverReturnType<T> => {
    const [isHover, setIsHover] = useState(false);
    const ref = useRef<T>(null);

    const handleMouseOver = throttle(() => setIsHover(true));
    const handleMouseOut = throttle(() => setIsHover(false));

    useEffect(() => {
        const el = ref.current;

        if (!el) {
            return;
        }

        el.addEventListener('mouseover', handleMouseOver);
        el.addEventListener('mouseout', handleMouseOut);

        return () => {
            el.removeEventListener('mouseover', handleMouseOver);
            el.removeEventListener('mouseout', handleMouseOut);
        };
    }, [ref.current]);

    return [ref, isHover];
};
