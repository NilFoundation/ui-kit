/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from '../Spinner';

/**
 * Spinner component unit testing.
 */
describe('spinner', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(<Spinner />);

        expect(getByRole('status')).toBeInTheDocument();
    });
});
