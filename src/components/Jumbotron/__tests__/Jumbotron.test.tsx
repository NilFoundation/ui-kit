/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Jumbotron } from '../Jumbotron';

/**
 * Jumbotron component unit testing.
 */
describe('jumbotron', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        render(<Jumbotron>Label content</Jumbotron>);

        expect(document.querySelector('.jumbotron')).toBeInTheDocument();
    });
});
