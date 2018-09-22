import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  it('should call onClickFunction when the button is clicked', () => {
    const onClickFunction = jest.fn();

    const wrapper = shallow(<Button onClickFunction={onClickFunction}/>);

        wrapper.find('.button').simulate('click');

        expect(onClickFunction).toHaveBeenCalled();
  });
});