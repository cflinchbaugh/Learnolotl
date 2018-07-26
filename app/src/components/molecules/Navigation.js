import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/test">Deck Test</Link>
            </div>
        )
    }
}

export default Navigation