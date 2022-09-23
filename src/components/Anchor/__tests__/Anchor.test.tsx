/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Anchor } from '../Anchor';

/**
 * Anchor component unit testing.
 */
describe('anchor', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByText } = render(<Anchor href="#">content</Anchor>);

        expect(getByText('content')).toBeInTheDocument();
    });
});
