import React from 'react';
import {shallow} from 'enzyme';
import CardBuilder from './CardBuilder';

describe('CardBuilder', () => {
    it('should call handleSubmitForm when the form is submitted', () => {
        const handleSubmitForm = jest.fn();
    
        const wrapper = shallow(<CardBuilder handleSubmitForm={handleSubmitForm}/>);

        wrapper.find('form').simulate('submit');

        expect(handleSubmitForm).toHaveBeenCalled();
  });
});