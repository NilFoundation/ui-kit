/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ElementType, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Breakpoint } from '../../enums';

/**
 * Props.
 */
type ContainerProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Allow container to take all avialiable space.
     */
    fluid?: boolean | Breakpoint;
    /**
     * HTML element type used to create container.
     */
    as?: ElementType;
};

/**
 * Container.
 *
 * @param {ContainerProps} props - Props.
 * @returns React component.
 */
export const Container = ({
    children,
    className,
    fluid,
    as: Component = 'div',
}: ContainerProps): ReactElement => {
    const getFluidClassName = () => {
        if (!fluid) {
            return 'container';
        }

        if (fluid === true) {
            return 'container-fluid';
        }

        return `container-${fluid}`;
    };

    const containerClassName = clsx(className && className, getFluidClassName());

    return <Component className={containerClassName}>{children}</Component>;
};
