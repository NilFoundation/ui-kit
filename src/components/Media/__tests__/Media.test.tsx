/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Media } from '../Media';

/**
 * Media component unit testing.
 */
describe('media', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        render(
            <Media>
                <Media.Item>Item</Media.Item>
                <Media.Body>
                    <Media.Heading>Heading</Media.Heading>
                    Body
                </Media.Body>
            </Media>,
        );

        const classNamesToTest = ['media', 'media-left', 'media-heading', 'media-body'];
        classNamesToTest.forEach(x =>
            expect(document.getElementsByClassName(x).item(0)).toBeInTheDocument(),
        );
    });
});
