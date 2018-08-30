import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group'
import Button from 'atoms/buttons/Button';

const StyleWrapper = styled.div`
    .cancel-icon-wrapper {
        float right;
    }

    .cancel,
    .echo {
        display: flex;
        justify-content: center;
        align-items: center;

        color: white;
        border-radius: 200px;
        font-size: 15px;
        position: absolute;
        margin-top: -49px;
        margin-left: -14px;
        height: 24px;
        width: 24px;
    }
    
    .cancel {
        background-color: red;
    }

    .echo {
        background-color: red;
        position: absolute;
        opacity: 0.1;
    }


`;

class CancelPop extends Component {
    render() {
        let {showX, ...rest} = this.props,
            popAnimationData = {
                classNames: "pop",
                in: showX,
                timeout: 300,
                unmountOnExit: true
            },
            popEchoAnimationData = {
                classNames: "pop-echo",
                in: showX,
                timeout: 200,
                unmountOnExit: true
            }

        return (
            <StyleWrapper>
                <Button {...rest}/>

                <div className="cancel-icon-wrapper">
                    <CSSTransition {...popAnimationData} >
                        <div className='cancel'>
                            x
                        </div>
                    </CSSTransition>

                    <CSSTransition {...popEchoAnimationData} >
                        <div className='echo'></div>
                    </CSSTransition>
                </div>
            </StyleWrapper>
        )
    }
}

export default CancelPop