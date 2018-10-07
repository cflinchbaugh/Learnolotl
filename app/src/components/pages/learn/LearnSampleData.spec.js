import React from 'react';
import {shallow} from 'enzyme';
import LearnSampleData from './LearnSampleData';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('LearnSampleData', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const learnSampleDataData = {
            
        }

        const tree = renderer.render(
            <LearnSampleData {...learnSampleDataData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    
});