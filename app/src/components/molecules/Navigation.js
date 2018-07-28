import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/flashcards">Flashcards</Link>
            </div>
        )
    }
}

export default Navigation