import React from 'react';
import {shallow} from 'enzyme';
import NavigationArrow from './NavigationArrow';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('NavigationArrow', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const tree = renderer.render(
            <NavigationArrow />
        );

        expect(tree).toMatchSnapshot();
    });

    it('should call handleBuildLandingViewNext when the NavigationArrow is clicked', () => {
        const onClickFunction = jest.fn();

        const wrapper = shallow(<NavigationArrow onClickFunction={onClickFunction}/>);

            wrapper.find('.navigation-button').simulate('click');

            expect(onClickFunction).toHaveBeenCalled();
    });
});