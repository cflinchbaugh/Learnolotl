import React, { Component } from 'react';

import { connect } from 'react-redux';
import { resetBuildData } from '../../actions/buildActions';
import { resetLearnDemo } from '../../actions/cardActions';

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
        this.props.resetLearnDemo();
    }
}


const mapStateToProps = state => ({

});

const mapStoreActions = {
    resetBuildData,
    resetLearnDemo
}

// https://stackoverflow.com/questions/35053161/how-to-set-activeclassname-for-wrapper-element-of-link-or-indexlink-in-react-rou
const allowNavigationToRerender = {
    pure: false
}

export default connect(mapStateToProps, mapStoreActions, null, allowNavigationToRerender)(NavigationContainer);