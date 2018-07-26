import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from "react-router";
import App from './containers/App';
import Home from './components/pages/Home';
import Test from './components/pages/Test';


export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
        <Route path="/test" component={App}>
            <IndexRoute component={Test}/>
        </Route>
    </Router>
);