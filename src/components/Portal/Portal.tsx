/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { ReactNode, ReactElement } from 'react';
import { createPortal } from 'react-dom';

/**
 * Props.
 */
export type PortalProps = {
    /**
     * Component children.
     */
    children: ReactNode;
};

/**
 * Create portal JSX helper.
 *
 * @param {PortalProps} props - Props.
 * @returns React component.
 */
export const Portal = ({ children }: PortalProps): ReactElement =>
    createPortal(children, document.getElementById('popup') || document.body);
