/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { Component, ReactNode, ErrorInfo } from 'react';

/**
 * Props.
 */
type ErrorBoundaryProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Something to show when error was catched.
     */
    errorView?: ReactNode;
    /**
     * Callback on catch error.
     */
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
};

/**
 * State.
 */
type State = {
    /**
     * Error.
     */
    hasError: boolean;
};

/**
 * Component to catch runtime errors.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
    public state: State = {
        hasError: false,
    };

    // eslint-disable-next-line jsdoc/require-jsdoc
    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    // eslint-disable-next-line jsdoc/require-jsdoc
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.props.onError && this.props.onError(error, errorInfo);
    }

    // eslint-disable-next-line jsdoc/require-jsdoc
    render() {
        if (this.state.hasError) {
            return this.props.errorView;
        }

        return this.props.children;
    }
}
