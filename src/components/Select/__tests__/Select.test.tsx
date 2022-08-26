/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
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

        expect(getByRole('listbox')).toBeInTheDocument();
    });
});
