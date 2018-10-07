import React from 'react';
import {shallow} from 'enzyme';
import Select from './Select';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Select', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const selectData = {
            options: []
        }

        const tree = renderer.render(
            <Select {...selectData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    it('renders populated data and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const selectData = {
            label: 'DC',
            id: 'DC-Selector',
            handleChange: jest.fn(),
            options: [
                {
                    id: 'Wayne',
                    value: 'Batman'
                }, {
                    id: 'Grayson',
                    value: 'Robin'
                }
            ]
        }

        const tree = renderer.render(
            <Select {...selectData}/>
        );

        expect(tree).toMatchSnapshot();
    });

});