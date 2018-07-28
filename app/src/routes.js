import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from "react-router";
import App from './containers/App';
import Home from './components/pages/Home';
import Flashcards from './components/pages/Flashcards';


export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
        <Route path="/flashcards" component={App}>
            <IndexRoute component={Flashcards}/>
        </Route>
    </Router>
);