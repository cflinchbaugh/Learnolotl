import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group'
import Button from 'atoms/Button';

const StyleWrapper = styled.div`
    .cancel-icon-wrapper {
        float right;
    }

    .cancel {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: red;
        color: white;
        border-radius: 200px;
        height: 24px;
        width: 24px;
        font-size: 15px;
        position: absolute;
        margin-top: -49px;
        margin-left: -14px;
    }

`;

class CancelPop extends Component {
    render() {
        let {showX, ...rest} = this.props;

        return (
            <StyleWrapper>
                <Button {...rest}/>

                <div className="cancel-icon-wrapper">
                    <CSSTransition
                        in={showX}
                        timeout={300}
                        classNames="pop" 
                        unmountOnExit
                    >
                        <div className='cancel'>x</div>
                    </CSSTransition>
                </div>
            </StyleWrapper>
        )
    }
}

export default CancelPop