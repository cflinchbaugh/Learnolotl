import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Navigation from '../components/molecules/Navigation';
import Home from '../components/pages/Home';
import Learn from '../components/pages/Learn';
import About from '../components/pages/About';

class Router extends Component {
    render() {
        return (
        <BrowserRouter>
            <div className="Router">
            <Navigation/>
            
            <Route path="/" exact component={Home}/>

            <Route path="/learn" component={Learn}/>

            <Route path="/about" component={About}/>
            </div>
        </BrowserRouter>
        );
    }
}

export default Router;