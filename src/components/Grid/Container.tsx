/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    ElementType,
    ReactElement,
    useCallback,
    forwardRef,
    ForwardedRef,
    HTMLAttributes,
} from 'react';
import clsx from 'clsx';
import { Breakpoint } from '../../enums';

/**
 * Container props.
 */
type ContainerProps<T extends ElementType> = {
    /**
     * HTML element type used to create container.
     */
    as?: ElementType;
    /**
     * Allow container to take all avialiable space.
     */
    fluid?: boolean | Breakpoint;
} & HTMLAttributes<T>;

/**
 * Container component.
 *
 * @param {ContainerProps} props - Props.
 * @returns React component.
 */
export const Container = forwardRef(function Container<T extends ElementType>(
    { children, className, fluid, as: Component = 'div', ...rest }: ContainerProps<T>,
    ref: ForwardedRef<T>,
): ReactElement {
    const getFluidClassName = useCallback(() => {
        if (!fluid) {
            return 'container';
        }

        if (fluid === true) {
            return 'container-fluid';
        }

        return `container-${fluid}`;
    }, [fluid]);

    const containerClassName = clsx(className && className, getFluidClassName());

    return (
        <Component
            className={containerClassName}
            ref={ref}
            {...rest}
        >
            {children}
        </Component>
    );
});
