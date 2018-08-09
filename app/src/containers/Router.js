import React, { Component } from 'react';
import styled from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Navigation from '../components/molecules/Navigation';
import Home from '../components/pages/Home';
import Learn from '../components/pages/Learn';
import LearnFlashcards from '../components/pages/LearnFlashcards';
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
                    <Route path="/" exact component={Home}/>

                    <Route path="/learn" exact component={Learn}/>
                    <Route path="/learn/flashcards" component={LearnFlashcards}/>

                    <Route path="/about" component={About}/>
                </StyleWrapper>
            </div>
        </BrowserRouter>
        );
    }
}

export default Router;
