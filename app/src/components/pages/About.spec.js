import React from 'react';
import {shallow} from 'enzyme';
import About from './About';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('About', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const aboutData = {
            
        }

        const tree = renderer.render(
            <About {...aboutData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    
});