/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '../Layout';

/**
 * Layout component unit testing.
 */
describe('layout', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(
            <Layout>
                <main />
            </Layout>,
        );

        expect(getByRole('main')).toBeInTheDocument();
    });
});
