/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { RefObject, useEffect } from 'react';
import { polyfill } from 'smoothscroll-polyfill';
import { prefersReduceMotion } from '../helpers';
import { useOnScreen } from './useOnScreen';

typeof window !== 'undefined' && polyfill();

/**
 * Hook scrolls element into view if it it not visible after rendering. Fires only once.
 *
 * @param ref - Ref.
 * @param [detectFullVisibility = true] - Scrolls to element even if it partially viewed.
 * @param scrollIntoViewOptions - ScrollIntoView options. Behaivour defaults to smooth.
 */
export const useAutoScrollIntoView = <T extends HTMLElement>(
    ref: RefObject<T>,
    detectFullVisibility = true,
    scrollIntoViewOptions?: ScrollIntoViewOptions,
) => {
    const elementFullyVisible = useOnScreen(ref, detectFullVisibility);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const reduceMotion = prefersReduceMotion();
        const scrollBehaviour: ScrollIntoViewOptions['behavior'] = reduceMotion
            ? 'auto'
            : scrollIntoViewOptions?.behavior ?? 'smooth';

        !elementFullyVisible &&
            ref.current.scrollIntoView({
                ...scrollIntoViewOptions,
                behavior: scrollBehaviour,
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
