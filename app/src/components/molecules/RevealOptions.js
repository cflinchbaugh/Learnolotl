import React, { Component } from 'react';
import styled from 'styled-components';
import CancelPop from 'molecules/buttons/CancelPop';
import { connect } from 'react-redux';

const StyleWrapper = styled.div`
    .RevealOptions {
        margin: auto;
    }
    
    .RevealOptions >* {
        float: left;
        margin-right: 2em;
    }

    .RevealOptions >*:last-child {
        margin-right: 0;
    }

`;

class RevealOptions extends Component {    
    _processReveal(translationsArr) {
        return translationsArr.map(function(translationData, idx) {
            let reveal,
                buttonData = {
                    label: translationData.id,
                    onClickFunction: '',
                    showX: false
                },
                displayDataId = this.props.flashCardDisplay[0] ? this.props.flashCardDisplay[0].id: false;

            if (translationData.id === displayDataId) {
                buttonData.onClickFunction = (() => this.handleClick('none'));
                buttonData.showX = true
            } else {
                buttonData.onClickFunction = (() => this.handleClick(translationData.id));
            }
            
            reveal = (
                <CancelPop key={idx} {...buttonData}/>
            );
            
            return reveal;
        }, this);
    }
    
    render() {
        let reveal = this._processReveal(this.props.optionsArray);
        
        return (
            <StyleWrapper>
                <div className="RevealOptions clearfix">
                    {reveal}
                </div>
            </StyleWrapper>
        )
    }

    handleClick(e) {
        this.props.handleClickOption(e);
    }

}

const mapStateToProps = state => ({
    flashCardDisplay: state.cards.revealOption
});

export default connect(mapStateToProps, {  })(RevealOptions);