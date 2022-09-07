/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Expandable } from '../Expandable';

const id = 'id';

/**
 * Expandable component unit testing.
 */
describe('expandable', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        render(
            <Expandable
                unmountOnCollapse={false}
                id={id}
            >
                content
            </Expandable>,
        );

        expect(document.getElementById(id)).toBeInTheDocument();
    });

    /**
     * Component destroys when unmountOnCollapse set to true (by default).
     */
    it('unmounts on collapse', () => {
        render(<Expandable id={id}>content</Expandable>);

        expect(document.getElementById(id)).not.toBeInTheDocument();
    });
});
