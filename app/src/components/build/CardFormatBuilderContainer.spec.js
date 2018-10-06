import React from 'react';
import {shallow} from 'enzyme';
import {CardFormatBuilderContainer} from './CardFormatBuilderContainer';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('CardFormatBuilderContainer', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const tree = renderer.render(
            <CardFormatBuilderContainer />
        );

        expect(tree).toMatchSnapshot();
    });
});  