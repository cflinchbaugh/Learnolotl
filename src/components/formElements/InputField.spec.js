import React from 'react';
import {shallow} from 'enzyme';
import InputField from './InputField';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('InputField', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const inputFieldData = {
        }

        const tree = renderer.render(
            <InputField {...inputFieldData}/>
        );

        expect(tree).toMatchSnapshot();
    });

});