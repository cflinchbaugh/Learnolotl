import React, { Component } from 'react';
import styled from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Navigation from '../components/navigation/Navigation';
import LearnContainer from '../components/pages/learn/LearnContainer';
import LearnFlashcardsContainer from '../components/pages/learn/LearnFlashcardsContainer'
import BuildContainer from '../components/pages/build/BuildContainer';
import About from '../components/pages/About';

const StyleWrapper = styled.div`
    min-width: 850px;
    max-width: 1000px;
    margin: auto;
    padding: 0 25px;
`;

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="Router">
                    <Navigation/>
                    
                    <StyleWrapper className="route-content-wrapper">
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
