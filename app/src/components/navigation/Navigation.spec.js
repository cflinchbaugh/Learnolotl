import React from 'react';
import {shallow} from 'enzyme';
import Navigation from './Navigation';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Navigation', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const navigationData = {

        }

        const tree = renderer.render(
            <Navigation {...navigationData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    
});