/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { InputGroup } from '../InputGroup';
import { FormControl } from '../../FormControl';

/**
 * InputGroup component unit testing.
 */
describe('inputGroup', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(
            <InputGroup>
                <InputGroup.Text>Addon</InputGroup.Text>
                <FormControl />
            </InputGroup>,
        );

        expect(getByRole('textbox')).toBeInTheDocument();
    });
});
