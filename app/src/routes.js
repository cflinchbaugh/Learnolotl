import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from "react-router";
import App from './containers/App';
import Home from './components/pages/Home';
import Learn from './components/pages/Learn';
import About from './components/pages/About';


export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
        
        <Route path="/learn" component={App}>
            <IndexRoute component={Learn}/>
        </Route>

        <Route path="/about" component={App}>
            <IndexRoute component={About}/>
        </Route>
    </Router>
);