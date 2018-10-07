import React from 'react';
import {shallow} from 'enzyme';
import {LearnContainer} from './LearnContainer';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('LearnContainer', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const learnContainerData = {
        }

        const tree = renderer.render(
            <LearnContainer {...learnContainerData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    
});