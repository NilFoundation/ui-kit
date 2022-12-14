/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { FormControl } from '../FormControl';

/**
 * FormControl component unit testing.
 */
describe('formControl', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(<FormControl />);

        expect(getByRole('textbox')).toBeInTheDocument();
    });
});
