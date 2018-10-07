import React from 'react';
import {shallow} from 'enzyme';
import Router from './Router';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Router', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const routerData = {
            
        }

        const tree = renderer.render(
            <Router {...routerData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    
});