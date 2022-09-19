/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Placeholder } from '../Placeholder';
import { PlaceholderAnimation } from '../PlaceholderAnimation';

/**
 * Placeholder component unit testing.
 */
describe('placeholder', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        render(<Placeholder animation={PlaceholderAnimation.glow} />);

        expect(document.querySelector('.placeholder')).toBeInTheDocument();

        cleanup();

        render(<Placeholder animation={PlaceholderAnimation.wave} />);

        expect(document.querySelector('.placeholder')).toBeInTheDocument();
    });
});
