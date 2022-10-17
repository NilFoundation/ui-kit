/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    KeyboardEvent,
    KeyboardEventHandler,
    MouseEventHandler,
    ReactElement,
    ReactNode,
} from 'react';
import clsx from 'clsx';
import { useKeyPress } from '../../hooks';
import { KeyboardEventKey } from '../../enums';

/**
 * Render link.
 */
type RenderLink = ({
    href,
    disabled,
    active,
    onKeyDown,
    onClick,
    tabIndex,
}: {
    href?: string;
    disabled?: boolean;
    active?: boolean;
    onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    ariaDisabled?: boolean;
    tabIndex?: number;
}) => ReactElement;

/**
 * Props.
 */
export type NavItemProps = {
    /**
     * Component children.
     */
    children?: ReactNode;
    /**
     * Applies active state.
     */
    active?: boolean;
    /**
     * Applies disabled state.
     */
    disabled?: boolean;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Adds anchor behaviour.
     */
    href?: string;
    /**
     * On click.
     */
    onClick?: () => void;
    /**
     * Render router link or any other custom link.
     */
    renderLink?: RenderLink;
};

/**
 * NavItem.
 *
 * @param {NavItemProps} props - Props.
 * @returns React component.
 */
export const NavItem = ({
    children,
    active,
    disabled,
    className,
    href,
    onClick,
    renderLink,
}: NavItemProps): ReactElement => {
    const computedHref = disabled ? undefined : href ?? '#';
    const itemClassName = clsx(active && 'active', className && className, disabled && 'disabled');
    const tabIndex = !disabled && (onClick || href) ? 0 : undefined;

    const handler = () => {
        onClick && !disabled && onClick();
    };

    const onClickHandler: MouseEventHandler<HTMLAnchorElement> = e => {
        e.preventDefault();
        handler();
    };

    const [onSelectWithKey] = useKeyPress<KeyboardEvent<HTMLAnchorElement>>(handler, [
        KeyboardEventKey.enter,
        KeyboardEventKey.space,
    ]);

    const onKeyPressHandler = (e: KeyboardEvent<HTMLAnchorElement>): void => {
        onSelectWithKey(e);
    };

    return (
        <li className={itemClassName}>
            {renderLink ? (
                renderLink({
                    href: computedHref,
                    disabled,
                    active,
                    onKeyDown: onClick ? onKeyPressHandler : undefined,
                    onClick: onClick ? onClickHandler : undefined,
                    tabIndex,
                })
            ) : (
                <a
                    href={computedHref}
                    aria-disabled={disabled}
                    onClick={onClick ? onClickHandler : undefined}
                    onKeyDown={onClick ? onKeyPressHandler : undefined}
                    tabIndex={tabIndex}
                >
                    {children}
                </a>
            )}
        </li>
    );
};
