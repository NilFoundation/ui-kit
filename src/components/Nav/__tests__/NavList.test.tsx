/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Nav } from '../Nav';

/**
 * NavList component unit testing.
 */
describe('navList', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        render(
            <Nav>
                <Nav.Item>Link</Nav.Item>
            </Nav>,
        );

        expect(document.querySelector('.nav')).toBeInTheDocument();
    });
});
