/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Select } from '../Select';

/**
 * Select component unit testing.
 */
describe('select', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(
            <Select>
                <div />
            </Select>,
        );

        expect(getByRole('textbox')).toBeInTheDocument();
    });

    /**
     * Component open and close menu.
     */
    it('open/close menu', () => {
        const { getByRole } = render(
            <Select>
                <Select.Option
                    title="title"
                    value="value"
                />
            </Select>,
        );

        const select = getByRole('textbox');

        expect(getByRole('listbox')).toHaveClass('hidden');

        fireEvent.click(select);

        expect(getByRole('listbox')).not.toHaveClass('hidden');
    });
});
