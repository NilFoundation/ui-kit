/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import './Sidebar.scss';

/**
 * Props.
 */
type SidebarProps = {
    children: ReactNode;
};

/**
 * Typeof Sidebar component.
 */
export type SidebarType = typeof Sidebar;

/**
 * Sidebar.
 *
 * @param {SidebarProps} props - Props.
 * @returns React component.
 */
export const Sidebar = ({children}: SidebarProps): ReactElement =>
    <aside className="sidebar">
        {children}
    </aside>;
