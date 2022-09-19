/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { LazyImage } from '../LazyImage';

/**
 * LazyImage component unit testing.
 */
describe('lazyImage', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        const { getByRole } = render(<LazyImage source="" />);

        expect(getByRole('img')).toBeInTheDocument();
    });

    /**
     * Onload callback.
     */
    it('onLoad', () => {
        const onLoad = jest.fn();
        const { getByRole } = render(
            <LazyImage
                onLoad={onLoad}
                source=""
            />,
        );

        expect(onLoad).toHaveBeenCalledTimes(0);

        fireEvent.load(getByRole('img'));

        expect(onLoad).toHaveBeenCalledTimes(1);
    });

    /**
     * Placeholder.
     */
    it('placeholder', () => {
        const placeholderClassName = 'placeholderClassName';
        const { getByRole } = render(
            <LazyImage
                source=""
                placeholder={<div className={placeholderClassName} />}
            />,
        );

        expect(document.querySelector(`.${placeholderClassName}`)).toBeInTheDocument();

        fireEvent.load(getByRole('img'));

        expect(document.querySelector(`.${placeholderClassName}`)).not.toBeInTheDocument();
    });
});
