import React from 'react';
import {shallow} from 'enzyme';
import {BuildContainer} from './BuildContainer';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('BuildContainer', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const buildContainerData = {

        }

        const tree = renderer.render(
            <BuildContainer {...buildContainerData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    
});