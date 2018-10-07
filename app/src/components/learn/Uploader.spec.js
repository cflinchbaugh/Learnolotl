import React from 'react';
import {shallow} from 'enzyme';
import Uploader from './Uploader';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Uploader', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const uploaderData = {
            
        }

        const tree = renderer.render(
            <Uploader {...uploaderData}/>
        );

        expect(tree).toMatchSnapshot();
    });
});