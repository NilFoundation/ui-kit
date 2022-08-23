/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import { NavbarType } from '../Navbar';
import { SidebarType } from '../Sidebar';
import { PageContainer } from '../PageContainer';
import './Layout.scss';

/**
 * Props.
 */
type LayoutProps = {
    children: ReactNode;
    sidebar?: SidebarType;
    navbar?: NavbarType;
};

/**
 * Layout component.
 *
 * @param {LayoutProps} props - Props.
 * @returns React component.
 */
export const Layout = ({ children, sidebar, navbar }: LayoutProps): ReactElement => (
    <PageContainer>
        <div className="layout">
            <div className="layout__navbar">{navbar && navbar}</div>
            <div className="layout__body">
                {sidebar && sidebar}
                {children}
            </div>
        </div>
    </PageContainer>
);
