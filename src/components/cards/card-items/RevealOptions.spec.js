import React from 'react';
import {shallow} from 'enzyme';
import {RevealOptions} from './RevealOptions';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('RevealOptions', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const revealOptionsData = {
            optionsArray: []
        }

        const tree = renderer.render(
            <RevealOptions {...revealOptionsData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    it('renders translationData and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const revealOptionsData = {
            optionsArray: [
                {
                    id: 'English'
                }, {
                    id: 'Hiragana'
                }, {
                    id: 'Romaji'
                }
            ],
            flashCardDisplay: []
        }

        const tree = renderer.render(
            <RevealOptions {...revealOptionsData}/>
        );

        expect(tree).toMatchSnapshot();
    });
});