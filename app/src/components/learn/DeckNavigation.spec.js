import React from 'react';
import {shallow} from 'enzyme';
import {DeckNavigation} from './DeckNavigation';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('DeckNavigation', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const deckNavigationData = {
            
        }

        const tree = renderer.render(
            <DeckNavigation {...deckNavigationData}/>
        );

        expect(tree).toMatchSnapshot();
    });
});