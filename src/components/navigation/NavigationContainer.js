import React, { Component } from 'react';

import { connect } from 'react-redux';
import { resetBuildData } from '../../actions/buildActions';

import Navigation from './Navigation';

export class NavigationContainer extends Component {
    constructor(props) {
        super(props);

        this.handleNavigationClick = this.handleNavigationClick.bind(this);
    }

    render() {
        let navigationData = {
                navigationItems: [
                    {
                        to: '/Learnolotl/learn',
                        onClick: this.handleNavigationClick,
                        label: 'Learn'
                    }, {
                        to: "/Learnolotl/build",
                        onClick: this.handleNavigationClick,
                        label: 'Build'
                    }, {
                        to: "/Learnolotl/about",
                        onClick: this.handleNavigationClick,
                        label: 'About'
                    }
                ]
            }
        
        return (
            <Navigation {...navigationData}/>
        );
    }

    handleNavigationClick() {
        this.props.resetBuildData();
    }
}


const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { resetBuildData })(NavigationContainer);