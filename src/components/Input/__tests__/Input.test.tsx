/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Input } from '../Input';

/**
 * Input component unit testing.
 */
describe('input', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(<Input />);

        expect(getByRole('textbox')).toBeInTheDocument();
    });
});
