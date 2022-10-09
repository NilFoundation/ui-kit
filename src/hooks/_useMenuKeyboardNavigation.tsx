/**
 * @file React hook.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { RefObject, useEffect } from 'react';
import { KeyboardEventKey } from '../enums';

/**
 * Provides keyboard (arrowUp and arrowDown) menu interactions.
 *
 * @param ref - Menu ref.
 * @param [isVisible] - Is visible.
 */
export const useMenuKeyboardNavigation = <T extends HTMLElement>(
    ref: RefObject<T>,
    isVisible?: boolean,
) => {
    useEffect(() => {
        const onKeyPress = (e: KeyboardEvent) => {
            isVisible && e.preventDefault();

            const { key } = e;
            if (key !== KeyboardEventKey.arrowDown && key !== KeyboardEventKey.arrowUp) {
                return;
            }

            if (!ref || !ref.current) {
                return;
            }

            const menuChildren = Array.from(ref.current.children);
            const activeElement = menuChildren.find(x => x === document.activeElement);
            const getNextFocus =
                key === KeyboardEventKey.arrowDown ? getNextChild : getPreviousChild;

            let i = 0;
            let nextFocus = getNextFocus(ref.current, activeElement);

            while (i < menuChildren.length) {
                if (!!nextFocus && nextFocus instanceof HTMLElement && nextFocus.tabIndex >= 0) {
                    nextFocus.focus();
                    break;
                }

                nextFocus = getNextFocus(ref.current, nextFocus);
                i++;
            }
        };

        document.addEventListener('keydown', onKeyPress);

        return () => {
            document.removeEventListener('keydown', onKeyPress);
        };
    }, [ref, isVisible]);
};

/**
 *
 * @param parent - Parent element.
 * @param item - Current item.
 * @returns - Preceding current item parent's child.
 */
const getPreviousChild = <T extends HTMLElement>(
    parent: T,
    item?: Element | null,
): Element | null => {
    if (!item || parent.isSameNode(item)) {
        return parent.lastElementChild;
    }

    return item.previousElementSibling ?? parent.lastElementChild;
};

/**
 *
 * @param parent - Parent element.
 * @param item - Current item.
 * @returns - Next to current item parent's child.
 */
const getNextChild = <T extends HTMLElement>(parent: T, item?: Element | null): Element | null => {
    if (!item || parent.isSameNode(item)) {
        return parent.firstElementChild;
    }

    return item.nextElementSibling ?? parent.firstElementChild;
};
