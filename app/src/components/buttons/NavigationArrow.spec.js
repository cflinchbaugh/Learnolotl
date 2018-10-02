import React from 'react';
import {shallow} from 'enzyme';
import NavigationArrow from '../NavigationArrow';

describe('NavigationArrow', () => {
  it('should call handleBuildLandingViewNext when the NavigationArrow is clicked', () => {
    const onClickFunction = jest.fn();

    const wrapper = shallow(<NavigationArrow onClickFunction={onClickFunction}/>);

        wrapper.find('.navigation-button').simulate('click');

        expect(onClickFunction).toHaveBeenCalled();
  });
});