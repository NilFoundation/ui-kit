/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    DetailedHTMLProps,
    forwardRef,
    ForwardRefExoticComponent,
    OlHTMLAttributes,
    ReactElement,
    RefAttributes,
} from 'react';
import { BreadcrumbsItem } from './BreadcrumbsItem';

/**
 * Breadcrumbs component props.
 */
export type BreadcrumbsProps = DetailedHTMLProps<
    OlHTMLAttributes<HTMLOListElement>,
    HTMLOListElement
>;

/**
 * Compounded Breadcrumbs component type.
 */
type CompoundedBreadcrumbsComponent = {
    Item: typeof BreadcrumbsItem;
} & ForwardRefExoticComponent<BreadcrumbsProps & RefAttributes<HTMLOListElement>>;

/**
 * Breadcrumbs component.
 *
 * @param {BreadcrumbsProps} props - Props.
 * @returns React component.
 */
export const Breadcrumbs = forwardRef<HTMLOListElement, BreadcrumbsProps>(function Breadcrumbs(
    { children, className = '', 'aria-label': ariaLabel = 'breadcrumb navigation', ...rest },
    ref,
): ReactElement {
    return (
        <ol
            className={`breadcrumb ${className ?? ''}`}
            aria-label={ariaLabel}
            ref={ref}
            {...rest}
        >
            {children}
        </ol>
    );
}) as CompoundedBreadcrumbsComponent;

/**
 * Breadcrumbs component extensions.
 */
Breadcrumbs.Item = BreadcrumbsItem;
