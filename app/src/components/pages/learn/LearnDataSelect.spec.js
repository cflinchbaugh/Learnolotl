import React from 'react';
import {shallow} from 'enzyme';
import LearnDataSelect from './LearnDataSelect';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('LearnDataSelect', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const learnDataSelectData = {
        }

        const tree = renderer.render(
            <LearnDataSelect {...learnDataSelectData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    
});