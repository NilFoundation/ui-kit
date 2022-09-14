/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Table } from '../Table';

/**
 * Table component unit testing.
 */
describe('table', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(
            <Table>
                <thead />
                <tbody />
            </Table>,
        );

        expect(getByRole('table')).toBeInTheDocument();
    });
});
