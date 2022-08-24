/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { useEffect, RefObject } from 'react';
import { throttle } from '../helpers';

/**
 * Props.
 */
export type UseEventListenerProps = {
    /**
     * Browser event.
     */
    eventType: Event['type'];
    /**
     * Tagret DOM element ref to add event listener.
     */
    ref: RefObject<HTMLElement>;
    /**
     * Callback to fire on browser event.
     */
    callback: () => void;
    /**
     * Throttles callback execution.
     */
    throttled?: boolean;
    /**
     * Wait time. If throttled is false, takes no effect.
     */
    wait?: number;
    /**
     * Should capture browser event.
     */
    shouldCapture?: boolean;
};

/**
 * Provides event listener with callback.
 *
 * @param {UseEventListenerProps} props - Props.
 */
export const useEventListener = ({
    eventType,
    ref,
    callback,
    throttled = false,
    wait = 200,
    shouldCapture = false,
}: UseEventListenerProps): void => {
    useEffect(() => {
        const cb = throttled ? throttle((): void => callback(), wait) : callback;

        document.addEventListener(eventType, cb, { capture: shouldCapture });

        return (): void => {
            document.removeEventListener(eventType, cb, {
                capture: shouldCapture,
            });
        };
    }, [eventType, ref, callback, throttled, wait, shouldCapture]);
};
