/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../Button';

/**
 * Button component unit testing.
 */
describe('button', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(<Button>content</Button>);

        expect(getByRole('button')).toBeInTheDocument();
    });
});
