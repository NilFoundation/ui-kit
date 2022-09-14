/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import './Layout.scss';

/**
 * Props.
 */
type LayoutProps = {
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Sidebar.
     */
    sidebar?: ReactNode;
    /**
     * Header.
     */
    header?: ReactNode;
    /**
     * Footer.
     */
    footer?: ReactNode;
    /**
     * Makes navabr sticky.
     */
    stickyHeader?: boolean;
};

/**
 * Layout component.
 *
 * @param {LayoutProps} props - Props.
 * @returns React component.
 */
export const Layout = ({
    children,
    sidebar,
    header,
    footer,
    stickyHeader,
    className,
}: LayoutProps): ReactElement => (
    <div className={`layout ${className ?? ''}`}>
        {header && (
            <header className={`layout__header ${stickyHeader ? 'layout__header-sticky' : ''}`}>
                {header}
            </header>
        )}
        <div className="layout__body">
            {sidebar && <aside>{sidebar}</aside>}
            <main>{children}</main>
        </div>
        {footer && <footer className="layout__footer">{footer}</footer>}
    </div>
);
