import React from 'react';
import {shallow} from 'enzyme';
import {NavigationContainer} from './NavigationContainer';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('NavigationContainer', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const navigationContainerData = {

        }

        const tree = renderer.render(
            <NavigationContainer {...navigationContainerData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    
});