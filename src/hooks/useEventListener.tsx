/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { useEffect, RefObject } from 'react';
import { throttle } from 'lodash';

/**
 * Props.
 */
export type UseEventListenerProps = {
    eventType: Event['type'];
    ref: RefObject<HTMLElement>;
    callback: () => void;
    throttled?: boolean;
    wait?: number;
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
    shouldCapture = false
}: UseEventListenerProps): void => {
    useEffect(() => {
        const cb = throttled ? throttle((): void => callback(), wait) : callback;

        document.addEventListener(eventType, cb, {capture: shouldCapture});

        return (): void => {
            document.removeEventListener(eventType, cb, {capture: shouldCapture});
        };
    }, [ref, callback]);
};
