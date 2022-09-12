/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Toast } from '../Toast';

/**
 * Toast component unit testing.
 */
describe('textarea', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(<Toast title="title" />);

        expect(getByRole('status')).toBeInTheDocument();
    });
});
