/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { useState, useCallback, useEffect } from 'react';
import throttle from 'lodash/throttle';

/**
 * Hook return type.
 */
type UseResponsiveReturnType = {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
};

const smBreakpoint = 768;
const mdBreakpoint = 992;
const lgBreakpoint = 1200;

/**
 * Hook provides easy usage of bootstrap 3 responsive breakpoints inside react components.
 *
 * @returns Current matching breakpoint.
 */
export const useBreakpoints = (): UseResponsiveReturnType => {
    const isXs = (): boolean =>
        window.matchMedia(`only screen and (max-width: ${smBreakpoint - 1}px)`).matches;
    const isSm = (): boolean =>
        window.matchMedia(
            `only screen and (min-width: ${smBreakpoint}px) and (max-width: ${mdBreakpoint - 1}px)`,
        ).matches;
    const isMd = (): boolean =>
        window.matchMedia(
            `only screen and (min-width: ${mdBreakpoint}px) and (max-width: ${lgBreakpoint - 1}px)`,
        ).matches;
    const isLg = (): boolean =>
        window.matchMedia(`only screen and (min-width: ${lgBreakpoint}px)`).matches;

    const [xs, setXs] = useState(isXs());
    const [sm, setSm] = useState(isSm());
    const [md, setMd] = useState(isMd());
    const [lg, setLg] = useState(isLg());

    const onWindowResize = throttle(() => {
        setXs(isXs());
        setSm(isSm());
        setMd(isMd());
        setLg(isLg());
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onWindowResizeCallback = useCallback(onWindowResize, []);

    useEffect(() => {
        window.addEventListener('resize', onWindowResizeCallback);

        return (): void => {
            window.removeEventListener('resize', onWindowResizeCallback);
        };
    }, [onWindowResizeCallback]);

    return { xs, sm, md, lg };
};
