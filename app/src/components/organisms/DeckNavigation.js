import React, { Component } from 'react';
import Deck from 'organisms/Deck';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    .deck-navigation {
        display: flex;
        justify-content: center;
        min-height: 350px;
    }

    .deck {
        width: 80%;
        display: flex;
    }

    .navigation {
        border-radius: 25px;
        width: 10%;
        transition: background-color 0.25s;
    }

    .navigation:hover {
        cursor: pointer;
}
`

class DeckNavigation extends Component {

    render() {
        return (
            <StyleWrapper>
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
            </StyleWrapper>
        );
    }

   
}

export default DeckNavigation;