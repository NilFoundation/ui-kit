/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { ReactNode, ReactElement, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * Props.
 */
export type PortalProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Dom element selector to mount portal.
     */
    selector?: string;
};

/**
 * Create portal JSX helper.
 *
 * @param {PortalProps} props - Props.
 * @returns React component.
 */
export const Portal = ({ children, selector = 'popup' }: PortalProps): ReactElement | null => {
    const [mounted, setMounted] = useState(false);
    const ref = useRef<Element | null>(null);

    useEffect(() => {
        ref.current = document.querySelector(selector) || document.body;
        setMounted(true);
    }, [selector]);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return mounted ? createPortal(children, ref.current!) : null;
};
