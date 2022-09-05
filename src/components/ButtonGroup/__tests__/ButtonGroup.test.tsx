/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../../Button/Button';

/**
 * ButtonGroup component unit testing.
 */
describe('buttonGroup', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(
            <ButtonGroup>
                <Button>Button</Button>
            </ButtonGroup>,
        );

        expect(getByRole('group')).toBeInTheDocument();
    });
});
