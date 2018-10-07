import React from 'react';
import {shallow} from 'enzyme';
import {FormElementFactory} from './FormElementFactory';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('FormElementFactory', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const formElementFactoryData = {
            formElements: [
                {
                    type: ''
                }
            ]
        }

        const tree = renderer.render(
            <FormElementFactory {...formElementFactoryData}/>
        );

        expect(tree).toMatchSnapshot();
    });

});