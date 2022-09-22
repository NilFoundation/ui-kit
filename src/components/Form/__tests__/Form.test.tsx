/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../Form';

/**
 * Form component unit testing.
 */
describe('form', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        render(
            <Form>
                <Form.Label>Label</Form.Label>
                <Form.Hint>Hint</Form.Hint>
            </Form>,
        );

        expect(document.querySelector('form')).toBeInTheDocument();
        expect(document.querySelector('label')).toBeInTheDocument();
        expect(document.querySelector('.help-block')).toBeInTheDocument();
    });
});
