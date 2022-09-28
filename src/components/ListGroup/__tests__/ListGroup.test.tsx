/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { ListGroup } from '../ListGroup';

/**
 * ListGroup component unit testing.
 */
describe('listGroup', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByText } = render(
            <ListGroup>
                <ListGroup.Item>item</ListGroup.Item>
            </ListGroup>,
        );

        expect(getByText('item')).toBeInTheDocument();
    });
});
