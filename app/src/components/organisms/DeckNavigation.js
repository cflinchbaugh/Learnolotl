import React, { Component } from 'react';
import Deck from '../organisms/Deck';

class DeckNavigation extends Component {

    render() {
        return (
            <div>
                <div onClick={this.props.handleClickPrevious}>
                    Previous
                </div>

                <div>
                    <Deck deckData={this.props.deckData}/>
                </div>

                <div onClick={this.props.handleClickNext}>
                    Next
                </div>
            </div>
        );
    }

   
}

export default DeckNavigation;