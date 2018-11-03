import React from 'react';
import {shallow} from 'enzyme';
import CardFormatBuilder from './CardFormatBuilder';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('CardFormatBuilder', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();
        let cardFormatBuildData = {
            saveFormatButtonData: {
                type: 'next',
                onClickFunction: function(){}
            }
        }

        const tree = renderer.render(
            <CardFormatBuilder {...cardFormatBuildData}/>
        );

        expect(tree).toMatchSnapshot();
    });

});  