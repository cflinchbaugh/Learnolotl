import React, { Component } from 'react';
import Deck from 'organisms/Deck';
import styled from 'styled-components';
import NavigationButton from 'atoms/buttons/NavigationArrow';

const StyleWrapper = styled.div`
    .deck-navigation {
        justify-content: center;
        min-height: 350px;
    }

    .deck {
        width: 100%;
        display: flex;
        margin-bottom: 15px;
    }

    .navigation-wrapper {
        text-align: center;
    }

    .navigation-button-wrapper {
        display: inline-block;
        margin: 0 10px;
    }

`

class DeckNavigation extends Component {

    render() {
        return (
            <StyleWrapper>
                <div className="deck-navigation">

                    <div className="deck">
                        <Deck deckData={this.props.deckData}/>
                    </div>

                    <div className="navigation-wrapper">
                        <div className="navigation-button-wrapper">
                            <NavigationButton 
                                type="previous"
                                onClickFunction={this.props.handleClickPrevious}/>
                        </div>

                        <div className="navigation-button-wrapper">
                            <NavigationButton 
                                type="next"
                                onClickFunction={this.props.handleClickNext}/>
                        </div>
                    </div>
                </div>
            </StyleWrapper>
        );
    }

   
}

export default DeckNavigation;