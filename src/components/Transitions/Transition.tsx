/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionChildren } from 'react-transition-group/Transition';
import { TransitionName } from '../../models';

/**
 * Props.
 */
export type TransitionProps = {
    /**
     * Component children;
     */
    children: TransitionChildren;
    /**
     * Transition name.
     */
    name: TransitionName;
    /**
     * Show the component; triggers the enter or exit states.
     */
    in: boolean;
};

/**
 * Transition component. Provides some build-in transitions.
 *
 * @param {TransitionProps} props - Props.
 * @returns React component.
 */
export const Transition = ({ name, children, ...rest }: TransitionProps): ReactElement => {
    useEffect(() => {
        import(`./Styles/${name.charAt(0).toUpperCase()}${name.slice(1)}.scss`);
    }, [name]);

    const getTimeout = () => {
        switch (name) {
            case 'alert':
                return 300;
            case 'fade':
                return 500;
            case 'slide':
                return 400;
        }
    };

    return (
        <CSSTransition
            classNames={name}
            timeout={getTimeout()}
            unmountOnExit
            {...rest}
        >
            {children}
        </CSSTransition>
    );
};
