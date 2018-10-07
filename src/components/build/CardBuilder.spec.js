import React from 'react';
import {shallow} from 'enzyme';
import CardBuilder from './CardBuilder';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('CardBuilder', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const tree = renderer.render(
            <CardBuilder />
        );

        expect(tree).toMatchSnapshot();
    });

    it('should call handleSubmitForm when the form is submitted', () => {
        const handleSubmitForm = jest.fn();
    
        const wrapper = shallow(<CardBuilder handleSubmitForm={handleSubmitForm}/>);

        wrapper.find('form').simulate('submit');

        expect(handleSubmitForm).toHaveBeenCalled();
    });
});  