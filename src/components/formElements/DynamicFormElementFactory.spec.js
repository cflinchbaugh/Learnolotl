import React from 'react';
import {shallow} from 'enzyme';
import DynamicFormElementFactory from './DynamicFormElementFactory';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('DynamicFormElementFactory', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const dynamicFormElementFactoryData = {

        }

        const tree = renderer.render(
            <DynamicFormElementFactory {...dynamicFormElementFactoryData}/>
        );

        expect(tree).toMatchSnapshot();
    });

});