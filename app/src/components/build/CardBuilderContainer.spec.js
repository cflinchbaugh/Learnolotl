import React from 'react';
import {shallow} from 'enzyme';
import {CardBuilderContainer} from './CardBuilderContainer';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('CardBuilderContainer', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const tree = renderer.render(
            <CardBuilderContainer />
        );

        expect(tree).toMatchSnapshot();
    });

});  