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
    max-width: 1400px;
    margin: auto;
    padding: 0 25px;
`;

class Router extends Component {
    render() {
        return (
        <BrowserRouter>
            <div className="Router">
                <Navigation/>
                
                <StyleWrapper>
                    <Route path="/" exact component={LearnContainer}/>

                    <Route path="/learn" exact component={LearnContainer}/>
                    <Route path="/learn/flashcards" component={LearnFlashcardsContainer}/>

                    <Route path="/build" component={BuildContainer}/>
                    <Route path="/about" component={About}/>
                </StyleWrapper>
            </div>
        </BrowserRouter>
        );
    }
}

export default Router;
