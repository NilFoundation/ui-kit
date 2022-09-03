/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextArea } from '../TextArea';

/**
 * TextArea component unit testing.
 */
describe('textarea', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        render(<TextArea />);

        expect(document.querySelector('textarea')).toBeInTheDocument();
    });

    /**
     * Can't change disabled.
     */
    it('disabled', async () => {
        const placeholder = 'placeholder';
        const { getByPlaceholderText } = render(
            <TextArea
                disabled
                placeholder={placeholder}
            />,
        );
        const textarea = getByPlaceholderText(placeholder);

        await userEvent.type(textarea, 'text');

        expect((textarea as HTMLTextAreaElement).value).toBe('');
    });
});
