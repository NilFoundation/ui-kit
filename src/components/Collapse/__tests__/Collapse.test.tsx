/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Collapse } from '../Collapse';

/**
 * Collapse component unit testing.
 */
describe('collapse', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const className = 'className';
        render(<Collapse className={className}>content</Collapse>);

        expect(document.getElementsByClassName(className).item(0)).toBeInTheDocument();
    });

    /**
     * Default open.
     */
    it('default open', () => {
        const { getByRole } = render(
            <Collapse defaultOpen>
                <Collapse.Content>
                    <div role="presentation" />
                </Collapse.Content>
            </Collapse>,
        );

        expect(getByRole('presentation')).toBeInTheDocument();
    });

    /**
     * Keyboard accessibility.
     */
    it('keyboard accessibility', async () => {
        const testKeyboardKeyPress = async (key: string) => {
            cleanup();

            const { getByRole } = render(
                <Collapse>
                    <Collapse.Button>Button</Collapse.Button>
                    <Collapse.Content>
                        <div role="presentation" />
                    </Collapse.Content>
                </Collapse>,
            );

            const button = getByRole('button');
            button.focus();

            await userEvent.keyboard(key);

            expect(getByRole('presentation')).toBeInTheDocument();
        };

        await testKeyboardKeyPress('{Enter}');
        await testKeyboardKeyPress(' '); // Test Space key
    });
});
