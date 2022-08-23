/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Breakpoint } from '../../enums';

/**
 * Props.
 */
type ContainerProps = {
    children: ReactNode;
    className?: string;
    fluid?: boolean | Breakpoint;
};

/**
 * Container.
 *
 * @param {ContainerProps} props - Props.
 * @returns React component.
 */
export const Container = ({ children, className, fluid }: ContainerProps): ReactElement => {
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

    return <div className={containerClassName}>{children}</div>;
};
