import React from 'react';
import {shallow} from 'enzyme';
import ActiveItem from './ActiveItem';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('ActiveItem', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const tree = renderer.render(
            <ActiveItem />
        );

        expect(tree).toMatchSnapshot();
    });

    it('renders passed in value and matches snapshot', () => {
        const renderer = new ShallowRenderer();
        const activeItemData = {
            value: "passedInValue"
        }

        const tree = renderer.render(
            <ActiveItem {...activeItemData}/>
        );

        expect(tree).toMatchSnapshot();
    });
});