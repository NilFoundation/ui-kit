/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from '../Navbar';

/**
 * Navbar component unit testing.
 */
describe('navbar', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        render(<Navbar>Navbar content</Navbar>);

        expect(document.querySelector('.navbar')).toBeInTheDocument();
    });
});
