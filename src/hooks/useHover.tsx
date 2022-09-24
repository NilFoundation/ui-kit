/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { useEffect, useState, useRef, RefObject } from 'react';
import { debounce } from '../helpers';

/**
 * UseHover hook return type.
 */
export type UseHoverReturnType<T extends HTMLElement> = [RefObject<T>, boolean];

/**
 * Hook settings.
 */
export type UseHoverSettings = {
    /**
     * Delay between hover an element and callback call.
     *
     * @default 100
     */
    hoverInDelay?: number;
    /**
     * Delay between leaving element and callback call.
     *
     * @default 100
     */
    hoverOutDelay?: number;
};

/**
 * Detect whether the mouse is hovering an element.
 *
 * @param {UseHoverSettings} settings - Settings.
 * @returns {UseHoverReturnType} - Ref and hover state.
 */
export const useHover = <T extends HTMLElement>({
    hoverInDelay = 100,
    hoverOutDelay = 100,
}: UseHoverSettings = {}): UseHoverReturnType<T> => {
    const [isHover, setIsHover] = useState(false);
    const ref = useRef<T>(null);

    const handleMouseEvent = (
        { relatedTarget, target }: MouseEvent,
        element: T,
        callback: () => void,
    ) => {
        const isMovingToChildNode =
            relatedTarget instanceof Node &&
            !element.isSameNode(relatedTarget) &&
            element.contains(relatedTarget);

        const isMovingFromChildNode =
            target instanceof Node && !element.isSameNode(target) && element.contains(target);

        if (isMovingToChildNode || isMovingFromChildNode) {
            return;
        }

        callback();
    };

    const handleMouseOver = debounce(() => {
        setIsHover(true);
    }, hoverInDelay);

    const handleMouseOut = debounce(
        (evt: MouseEvent, element: T) => handleMouseEvent(evt, element, () => setIsHover(false)),
        hoverOutDelay,
    );

    useEffect(() => {
        const el = ref.current;

        if (!el) {
            return;
        }

        el.addEventListener('mouseover', handleMouseOver);
        el.addEventListener('mouseout', (e: MouseEvent) => handleMouseOut(e, el));

        return () => {
            el.removeEventListener('mouseover', handleMouseOver);
            el.removeEventListener('mouseout', (e: MouseEvent) => handleMouseOut(e, el));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current]);

    return [ref, isHover];
};
