import React from 'react';
import BuildLandingView from './BuildLandingView';
import renderer from 'react-test-renderer';

it('renders and matches snapshot', () => {
    const tree = renderer
        .create(<BuildLandingView />)
        .toJSON();
        
    expect(tree).toMatchSnapshot();
});