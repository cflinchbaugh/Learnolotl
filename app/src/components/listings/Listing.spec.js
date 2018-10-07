import React from 'react';
import {shallow} from 'enzyme';
import {Listing} from './Listing';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Listing', () => {
    it('renders and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const listingData = {
            uploadedIds: []
        }

        const tree = renderer.render(
            <Listing {...listingData}/>
        );

        expect(tree).toMatchSnapshot();
    });

    it('renders multiple items and matches snapshot', () => {
        const renderer = new ShallowRenderer();

        const listingData = {
            uploadedIds: [
                'Ichi',
                'Ni',
                'San',
                'Yan',
                'Go'
            ]
        }

        const tree = renderer.render(
            <Listing {...listingData}/>
        );

        expect(tree).toMatchSnapshot();
    });
});