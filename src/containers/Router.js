import React, { Component } from 'react';
import styled from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import NavigationContainer from '../components/navigation/NavigationContainer';
import LearnContainer from '../components/pages/learn/LearnContainer';
import LearnFlashcardsContainer from '../components/pages/learn/LearnFlashcardsContainer'
import BuildContainer from '../components/pages/build/BuildContainer';
import About from '../components/pages/About';

const StyleWrapper = styled.div`
    margin: auto;
    padding: 0 25px;
`;

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="Router 
                    col-xs-12 col-sm-8 col-sm-offset-2 
                    col-lg-6 col-lg-offset-3
                    clearfix">
                    <NavigationContainer/>
                    
                    <StyleWrapper className="route-content-wrapper col-xs-12">
                        <Route path="/" exact component={LearnContainer}/>
                        <Route path="/Learnolotl/" exact component={LearnContainer}/>

                        <Route path="/Learnolotl/learn" exact component={LearnContainer}/>
                        <Route path="/learn/flashcards" component={LearnFlashcardsContainer}/>

                        <Route path="/Learnolotl/build" component={BuildContainer}/>
                        <Route path="/Learnolotl/about" component={About}/>
                    </StyleWrapper>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;
