/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../Image';

/**
 * Image component unit testing.
 */
describe('image', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(<Image source="" />);

        expect(getByRole('img')).toBeInTheDocument();
    });
});
