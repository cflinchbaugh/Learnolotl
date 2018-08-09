import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'atoms/Button';

const StyleWrapper = styled.div`
    .button-navigation {
        .navigation-button {
            display: inline-block;
        }
    }

    .active {
        animation: spin 1.5s ease-in;
    }

    @keyframes spin {
        0%  {-webkit-transform: rotate(0deg);}
        100% {-webkit-transform: rotate(360deg);}	
    }
`

const styles= {
    transition: 'all 0.25s ease-out'
};

class ButtonNavigation extends Component {
    constructor() {
        super();

        this.state = {
            opacity: 1,
            scale: 1
        }
    }

    onHide() {
        this.setState({
            opacity: 0
        });
    }

    onScale() {
        this.setState({
            scale: this.state.scale > 1 ? 1 : 1.3
        });
    }

    render() {
        return (
            <StyleWrapper>
                <div className="button-navigation">
                    <div className="navigation-button" 
                        onClick={this.handleNavBtnClick} 
                        onMouseEnter={this.onScale.bind(this)}
                        onMouseLeave={this.onScale.bind(this)}

                        style={{...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')'}}>

                        <Button label="+"/>
                    </div>

                    <div className="options">
                        <Button label="English"/>
                        <Button label="Romaji"/>
                        <Button label="Hiragana"/>
                    </div>
                </div>
            </StyleWrapper>
        );
    }

}

export default ButtonNavigation;