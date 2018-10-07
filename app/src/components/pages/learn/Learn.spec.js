import React from 'react';
import {shallow} from 'enzyme';
import Learn from './Learn';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Learn', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const learnData = {
            uploadedIds: ''
        }

        const tree = renderer.render(
            <Learn {...learnData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    
});