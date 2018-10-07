import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Card', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const cardData = {
            revealItem: []
        }

        const tree = renderer.render(
            <Card {...cardData}/>
        );

        expect(tree).toMatchSnapshot();
    });

});