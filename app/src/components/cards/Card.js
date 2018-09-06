import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import ActiveItem from './card-items/ActiveItem';
import RevealItem from './card-items/RevealItem';
import RevealOptions from './card-items/RevealOptions';

const StyleWrapper = styled.div`
    padding: 0 0 20px 0;
    
    .active-wrapper,
    .translations-wrapper,
    .reveal-wrapper {
        margin-bottom: 20px;
        text-align: center;
    }

    .reveal-wrapper {
        min-height: 200px;
    }

    .translations-wrapper {
        min-height: 60px;
    }

    .content {
        min-height: 550px;
    }

`;
// TODO: Content min-height, is this necessary?
    // It's not lookin' so good on large-format monitors
function Card (props) {
    return (
        <StyleWrapper>
            <div className="card">
                <div className="content">
                    <div className="active-wrapper">
                        <ActiveItem value={props.activeValue}/>
                    </div>

                    <TransitionGroup className="reveal-wrapper">
                        {props.revealItem.map( ({ id, value }) => (
                            <CSSTransition key={id}
                                {...props.fadeInVanishOutAnimationData}
                            >
                                <div className="translations-wrapper">
                                    <RevealItem value={value}/>
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>

                <div className="reveal-options-wrapper">
                    <RevealOptions {...props.revealOptionsData} />
                </div>

            </div>
        </StyleWrapper>
    )
}

export default Card;