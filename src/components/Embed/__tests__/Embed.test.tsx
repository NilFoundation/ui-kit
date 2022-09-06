/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Embed } from '../Embed';

/**
 * Embed component unit testing.
 */
describe('embed', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        render(
            <Embed
                source=""
                title="title"
            />,
        );

        expect(document.querySelector('.embed-responsive')).toBeInTheDocument();
    });

    it('spinner display', async () => {
        const onLoadMock = jest.fn();
        const { getByRole } = render(
            <Embed
                source=""
                title="title"
                onLoad={onLoadMock}
            />,
        );
        const spinner = getByRole('status');

        expect(spinner).toBeInTheDocument();

        await waitFor(() => expect(onLoadMock).toHaveBeenCalledTimes(1));

        expect(spinner).not.toBeInTheDocument();
    });
});
