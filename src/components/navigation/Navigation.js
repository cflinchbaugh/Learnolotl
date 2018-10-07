import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyleWrapper = styled.div`
    width: 100%;
    margin-bottom: 30px;

`
    
const NavLinkStyled = styled(NavLink)`
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    transition: color 0.25s;
    margin: 10px 8px;
    display: inline-block;

    &:hover {
        color: #47517c;
    }

    &.${(props) => props.activeClassName } {
        color: #3c466b;
    }

`
NavLinkStyled.defaultProps = {
    activeClassName: 'active'
};

function Navigation () {
    return (
        <StyleWrapper>
            <div className="navigation-wrapper">
                <NavLinkStyled to="/Learnolotl/learn">Learn</NavLinkStyled>
                <NavLinkStyled to="/Learnolotl/build">Build</NavLinkStyled>
                <NavLinkStyled to="/Learnolotl/about">About</NavLinkStyled>
            </div>
        </StyleWrapper>
    )
}

export default Navigation