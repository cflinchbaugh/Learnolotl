import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from "react-router";
import App from './containers/App';
import Home from './components/pages/Home';
import Flashcards from './components/pages/Flashcards';
import About from './components/pages/About';


export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
        
        <Route path="/flashcards" component={App}>
            <IndexRoute component={Flashcards}/>
        </Route>

        <Route path="/about" component={App}>
            <IndexRoute component={About}/>
        </Route>
    </Router>
);