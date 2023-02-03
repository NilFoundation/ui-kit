/**
 * @file React component.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React, { ComponentPropsWithRef, ElementType, ReactElement, ReactNode } from 'react';
import { customThemeStyles } from './customThemeStyles';

/**
 * Theme provider component props.
 */
type ThemeProviderOwnProps<T extends ElementType = ElementType> = {
    /**
     * Children.
     */
    children: ReactNode;
    /**
     * Custom element to render.
     *
     * @default div
     */
    as?: T;
};

/**
 * Type union of ThemeProvider component own props and props of custom element, passed with 'as' prop.
 */
export type ThemeProviderProps<T extends ElementType = ElementType> = ThemeProviderOwnProps &
    Omit<ComponentPropsWithRef<T>, keyof ThemeProviderOwnProps<T>>;

/**
 * Headless component to inject bootstrap css variables overrides into children styles.
 * You need to add bootstrap to your project to make this component work.
 *
 * @param {ThemeProviderProps} props Props.
 * @example ```tsx
 *   <ThemeProvider>
 *     <div>Title<div /> // Div has ui-kit styles
 *     <Card /> // Card has ui-kit styles
 *   <ThemeProvider />
 * ```
 * @returns Children with injected styles.
 */
export const ThemeProvider = ({
    children,
    as = 'div',
    style,
    ...restProps
}: ThemeProviderProps): ReactElement => {
    const Component: ElementType | undefined = as;
    return (
        <Component
            style={{ ...style, ...customThemeStyles }}
            {...restProps}
        >
            {children}
        </Component>
    );
};
