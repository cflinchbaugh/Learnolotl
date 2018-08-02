import React, { Component } from 'react';
import Deck from '../organisms/Deck';
import styled from 'styled-components';

const StyleWrapper = styled.div`
.deck-navigation {
    display: flex;
    justify-content: center;
    background: rgb(2,0,36);  //fallback
    background: linear-gradient(117deg, rgba(2,0,36,1) 0%, rgba(152,16,138,1) 35%, rgba(40,121,224,1) 83%, rgba(0,212,255,1) 100%);
    min-height: 500px;
}

.navigation {
    border-radius: 25px;
    padding: 5px;
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