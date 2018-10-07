import React from 'react';
import {shallow} from 'enzyme';
import LearnFlashcards from './LearnFlashcards';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('LearnFlashcards', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const learnFlashcardsData = {
        }

        const tree = renderer.render(
            <LearnFlashcards {...learnFlashcardsData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    
});