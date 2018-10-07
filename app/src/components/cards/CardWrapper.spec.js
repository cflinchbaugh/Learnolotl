import React from 'react';
import {shallow} from 'enzyme';
import {CardWrapper} from './CardWrapper';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('CardWrapper', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const cardWrapperData = {
            revealItem: [],
            data: {
                revealOptionData: [
                    {
                        id: 'English'
                    }
                ]
            },
            mode: 'English'
        }

        const tree = renderer.render(
            <CardWrapper {...cardWrapperData}/>
        );

        expect(tree).toMatchSnapshot();
    });

});