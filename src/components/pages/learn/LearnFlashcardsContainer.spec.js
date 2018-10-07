import React from 'react';
import {shallow} from 'enzyme';
import {LearnFlashcardsContainer} from './LearnFlashcardsContainer';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('LearnFlashcardsContainer', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const learnFlashcardsContainerData = {
            location: {
                state: {
                    mode: 'test'
                }
            },
            items: []
        }

        const tree = renderer.render(
            <LearnFlashcardsContainer {...learnFlashcardsContainerData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    
});