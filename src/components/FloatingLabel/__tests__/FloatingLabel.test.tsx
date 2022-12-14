/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { FloatingLabel } from '../FloatingLabel';
import { FormControl } from '../../FormControl';

/**
 * Floating label component unit testing.
 */
describe('floatingLabel', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(
            <FloatingLabel text="Label">
                {propsGetter => <FormControl {...propsGetter()} />}
            </FloatingLabel>,
        );

        expect(getByRole('textbox')).toBeInTheDocument();
    });
});
