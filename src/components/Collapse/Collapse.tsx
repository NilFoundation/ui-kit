/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useState, useCallback, useEffect } from 'react';
import { CollapseContext } from './CollapseContext';
import { CollapseButton } from './CollapseButton';
import { CollapseContent } from './CollapseContent';

/**
 * Collapse props.
 */
export interface CollapseProps {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Collapse content is vivible by default.
     */
    defaultOpen?: boolean;
}

/**
 * Collapse component.
 *
 * @param {CollapseProps} props - Props.
 * @returns - React component.
 */
export const Collapse = ({ children, defaultOpen = false }: CollapseProps): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        defaultOpen && setIsOpen(true);
    }, [defaultOpen]);

    const toggleIsOpen = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    return (
        <CollapseContext.Provider value={{ isOpen, toggleIsOpen }}>
            {children}
        </CollapseContext.Provider>
    );
};

/**
 * Component extensions.
 */
Collapse.Button = CollapseButton;
Collapse.Content = CollapseContent;
