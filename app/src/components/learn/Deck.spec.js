import React from 'react';
import {shallow} from 'enzyme';
import {Deck} from './Deck';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Deck', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const deckData = {
            deckData: {
                cardData: []
            }
        }

        const tree = renderer.render(
            <Deck {...deckData}/>
        );

        expect(tree).toMatchSnapshot();
    });
});