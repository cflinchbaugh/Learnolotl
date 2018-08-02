import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/learn">Learn</Link>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default Navigation