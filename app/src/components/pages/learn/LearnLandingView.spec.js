import React from 'react';
import {shallow} from 'enzyme';
import LearnLandingView from './LearnLandingView';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('LearnLandingView', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const learnLandingViewData = {
            
        }

        const tree = renderer.render(
            <LearnLandingView {...learnLandingViewData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    
});