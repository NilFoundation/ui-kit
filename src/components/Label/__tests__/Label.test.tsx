/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Label } from '../Label';

/**
 * Label component unit testing.
 */
describe('label', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        render(<Label>Label content</Label>);

        expect(document.querySelector('.label')).toBeInTheDocument();
    });
});
