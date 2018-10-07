import React from 'react';
import {shallow} from 'enzyme';
import CardFileNameBuilder from './CardFileNameBuilder';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('CardFileNameBuilder', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const tree = renderer.render(
            <CardFileNameBuilder />
        );

        expect(tree).toMatchSnapshot();
    });

});  