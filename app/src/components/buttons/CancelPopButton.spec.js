import React from 'react';
import {shallow} from 'enzyme';
import CancelPopButton from './CancelPopButton';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('CancelPopButton', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const tree = renderer.render(
            <CancelPopButton />
        );

        expect(tree).toMatchSnapshot();
    });
});