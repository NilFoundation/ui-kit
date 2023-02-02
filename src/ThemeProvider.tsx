/**
 * @file React component.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import { Children, CSSProperties, ReactElement, ReactNode } from 'react';
import colors from './scss/colors.module.scss';

/**
 * Theme provider component props.
 */
type ThemeProviderProps = {
    children: ReactNode;
};

/**
 * Headless component to inject bootstrap css variables overrides into children styles.
 * You need to add bootstrap to tour project to make this component work.
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
export const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => {
    return Children.map(children, child => {});
};

const styleWithOverrides: CSSProperties = {};
