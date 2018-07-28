import React, { Component } from 'react';
import Deck from '../organisms/Deck';
import styles from './DeckNavigation.css';

class DeckNavigation extends Component {

    render() {
        return (
            <div className="deck-navigation">
                <div className="navigation previous" onClick={this.props.handleClickPrevious}>
                    Previous
                </div>

                <div className="deck">
                    <Deck deckData={this.props.deckData}/>
                </div>

                <div className="navigation next" onClick={this.props.handleClickNext}>
                    Next
                </div>
            </div>
        );
    }

   
}

export default DeckNavigation;