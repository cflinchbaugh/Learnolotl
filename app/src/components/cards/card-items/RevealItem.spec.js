import React from 'react';
import {shallow} from 'enzyme';
import RevealItem from './RevealItem';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('RevealItem', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const tree = renderer.render(
            <RevealItem />
        );

        expect(tree).toMatchSnapshot();
    });
   
    it('renders passed in value and matches snapshot', () => {
        const renderer = new ShallowRenderer();
        const revealItemData = {
            value: "passedInValue"
        }

        const tree = renderer.render(
            <RevealItem {...revealItemData}/>
        );

        expect(tree).toMatchSnapshot();
    });
});